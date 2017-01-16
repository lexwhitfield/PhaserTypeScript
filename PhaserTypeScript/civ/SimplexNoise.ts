﻿/// <reference path="Game.ts" />

namespace Civ {

    export class SimplexNoise {

        F2: number = 0.5 * (Math.sqrt(3.0) - 1.0);
        G2: number = (3.0 - Math.sqrt(3.0)) / 6.0;
        F3: number = 1.0 / 3.0;
        G3: number = 1.0 / 6.0;
        F4: number = (Math.sqrt(5.0) - 1.0) / 4.0;
        G4: number = (5.0 - Math.sqrt(5.0)) / 20.0;
        perm: Uint8Array;
        permMod12: Uint8Array;
        grad3: Float32Array;
        grad4: Float32Array;

        constructor() {

            var p = new Uint8Array(256);
            this.perm = new Uint8Array(512);
            this.permMod12 = new Uint8Array(512);

            for (var i = 0; i < 256; i++) {
                p[i] = Math.random() * 256;
            }

            for (i = 0; i < 512; i++) {
                this.perm[i] = p[i & 255];
                this.permMod12[i] = this.perm[i] % 12;
            }

            this.grad3 = new Float32Array([1, 1, 0,
                -1, 1, 0,
                1, -1, 0,

                -1, -1, 0,
                1, 0, 1,
                -1, 0, 1,

                1, 0, -1,
                -1, 0, -1,
                0, 1, 1,

                0, -1, 1,
                0, 1, -1,
                0, -1, -1]);

            this.grad4 = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1,
                0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1,
                1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1,
                -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1,
                1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1,
                -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1,
                1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0,
                -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
        }

        noise2D(xin: number, yin: number): number {

            var n0 = 0, n1 = 0, n2 = 0; // Noise contributions from the three corners
            // Skew the input space to determine which simplex cell we're in
            var s = (xin + yin) * this.F2; // Hairy factor for 2D
            var i = Math.floor(xin + s);
            var j = Math.floor(yin + s);
            var t = (i + j) * this.G2;
            var X0 = i - t; // Unskew the cell origin back to (x,y) space
            var Y0 = j - t;
            var x0 = xin - X0; // The x,y distances from the cell origin
            var y0 = yin - Y0;
            // For the 2D case, the simplex shape is an equilateral triangle.
            // Determine which simplex we are in.
            var i1: number, j1: number; // Offsets for second (middle) corner of simplex in (i,j) coords
            if (x0 > y0) {
                i1 = 1;
                j1 = 0;
            } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
            else {
                i1 = 0;
                j1 = 1;
            } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
            // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
            // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
            // c = (3-sqrt(3))/6
            var x1 = x0 - i1 + this.G2; // Offsets for middle corner in (x,y) unskewed coords
            var y1 = y0 - j1 + this.G2;
            var x2 = x0 - 1.0 + 2.0 * this.G2; // Offsets for last corner in (x,y) unskewed coords
            var y2 = y0 - 1.0 + 2.0 * this.G2;
            // Work out the hashed gradient indices of the three simplex corners
            var ii = i & 255;
            var jj = j & 255;
            // Calculate the contribution from the three corners
            var t0 = 0.5 - x0 * x0 - y0 * y0;
            if (t0 >= 0) {
                var gi0 = this.permMod12[ii + this.perm[jj]] * 3;
                t0 *= t0;
                n0 = t0 * t0 * (this.grad3[gi0] * x0 + this.grad3[gi0 + 1] * y0); // (x,y) of grad3 used for 2D gradient
            }
            var t1 = 0.5 - x1 * x1 - y1 * y1;
            if (t1 >= 0) {
                var gi1 = this.permMod12[ii + i1 + this.perm[jj + j1]] * 3;
                t1 *= t1;
                n1 = t1 * t1 * (this.grad3[gi1] * x1 + this.grad3[gi1 + 1] * y1);
            }
            var t2 = 0.5 - x2 * x2 - y2 * y2;
            if (t2 >= 0) {
                var gi2 = this.permMod12[ii + 1 + this.perm[jj + 1]] * 3;
                t2 *= t2;
                n2 = t2 * t2 * (this.grad3[gi2] * x2 + this.grad3[gi2 + 1] * y2);
            }
            // Add contributions from each corner to get the final noise value.
            // The result is scaled to return values in the interval [-1,1].
            return 70.0 * (n0 + n1 + n2);
        }

        noise3D (xin: number, yin: number, zin: number):number {

            var n0: number, n1: number, n2: number, n3: number; // Noise contributions from the four corners
            // Skew the input space to determine which simplex cell we're in
            var s = (xin + yin + zin) * this.F3; // Very nice and simple skew factor for 3D
            var i = Math.floor(xin + s);
            var j = Math.floor(yin + s);
            var k = Math.floor(zin + s);
            var t = (i + j + k) * this.G3;
            var X0 = i - t; // Unskew the cell origin back to (x,y,z) space
            var Y0 = j - t;
            var Z0 = k - t;
            var x0 = xin - X0; // The x,y,z distances from the cell origin
            var y0 = yin - Y0;
            var z0 = zin - Z0;
            // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
            // Determine which simplex we are in.
            var i1: number, j1: number, k1: number; // Offsets for second corner of simplex in (i,j,k) coords
            var i2: number, j2: number, k2: number; // Offsets for third corner of simplex in (i,j,k) coords
            if (x0 >= y0) {
                if (y0 >= z0) {
                    i1 = 1;
                    j1 = 0;
                    k1 = 0;
                    i2 = 1;
                    j2 = 1;
                    k2 = 0;
                } // X Y Z order
                else if (x0 >= z0) {
                    i1 = 1;
                    j1 = 0;
                    k1 = 0;
                    i2 = 1;
                    j2 = 0;
                    k2 = 1;
                } // X Z Y order
                else {
                    i1 = 0;
                    j1 = 0;
                    k1 = 1;
                    i2 = 1;
                    j2 = 0;
                    k2 = 1;
                } // Z X Y order
            }
            else { // x0<y0
                if (y0 < z0) {
                    i1 = 0;
                    j1 = 0;
                    k1 = 1;
                    i2 = 0;
                    j2 = 1;
                    k2 = 1;
                } // Z Y X order
                else if (x0 < z0) {
                    i1 = 0;
                    j1 = 1;
                    k1 = 0;
                    i2 = 0;
                    j2 = 1;
                    k2 = 1;
                } // Y Z X order
                else {
                    i1 = 0;
                    j1 = 1;
                    k1 = 0;
                    i2 = 1;
                    j2 = 1;
                    k2 = 0;
                } // Y X Z order
            }
            // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
            // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
            // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
            // c = 1/6.
            var x1 = x0 - i1 + this.G3; // Offsets for second corner in (x,y,z) coords
            var y1 = y0 - j1 + this.G3;
            var z1 = z0 - k1 + this.G3;
            var x2 = x0 - i2 + 2.0 * this.G3; // Offsets for third corner in (x,y,z) coords
            var y2 = y0 - j2 + 2.0 * this.G3;
            var z2 = z0 - k2 + 2.0 * this.G3;
            var x3 = x0 - 1.0 + 3.0 * this.G3; // Offsets for last corner in (x,y,z) coords
            var y3 = y0 - 1.0 + 3.0 * this.G3;
            var z3 = z0 - 1.0 + 3.0 * this.G3;
            // Work out the hashed gradient indices of the four simplex corners
            var ii = i & 255;
            var jj = j & 255;
            var kk = k & 255;
            // Calculate the contribution from the four corners
            var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
            if (t0 < 0) n0 = 0.0;
            else {
                var gi0 = this.permMod12[ii + this.perm[jj + this.perm[kk]]] * 3;
                t0 *= t0;
                n0 = t0 * t0 * (this.grad3[gi0] * x0 + this.grad3[gi0 + 1] * y0 + this.grad3[gi0 + 2] * z0);
            }
            var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
            if (t1 < 0) n1 = 0.0;
            else {
                var gi1 = this.permMod12[ii + i1 + this.perm[jj + j1 + this.perm[kk + k1]]] * 3;
                t1 *= t1;
                n1 = t1 * t1 * (this.grad3[gi1] * x1 + this.grad3[gi1 + 1] * y1 + this.grad3[gi1 + 2] * z1);
            }
            var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
            if (t2 < 0) n2 = 0.0;
            else {
                var gi2 = this.permMod12[ii + i2 + this.perm[jj + j2 + this.perm[kk + k2]]] * 3;
                t2 *= t2;
                n2 = t2 * t2 * (this.grad3[gi2] * x2 + this.grad3[gi2 + 1] * y2 + this.grad3[gi2 + 2] * z2);
            }
            var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
            if (t3 < 0) n3 = 0.0;
            else {
                var gi3 = this.permMod12[ii + 1 + this.perm[jj + 1 + this.perm[kk + 1]]] * 3;
                t3 *= t3;
                n3 = t3 * t3 * (this.grad3[gi3] * x3 + this.grad3[gi3 + 1] * y3 + this.grad3[gi3 + 2] * z3);
            }
            // Add contributions from each corner to get the final noise value.
            // The result is scaled to stay just inside [-1,1]
            return 32.0 * (n0 + n1 + n2 + n3);
        }

        noise4D (x: number, y: number, z: number, w: number):number {

            var n0: number, n1: number, n2: number, n3: number, n4: number; // Noise contributions from the five corners
            // Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in
            var s = (x + y + z + w) * this.F4; // Factor for 4D skewing
            var i = Math.floor(x + s);
            var j = Math.floor(y + s);
            var k = Math.floor(z + s);
            var l = Math.floor(w + s);
            var t = (i + j + k + l) * this.G4; // Factor for 4D unskewing
            var X0 = i - t; // Unskew the cell origin back to (x,y,z,w) space
            var Y0 = j - t;
            var Z0 = k - t;
            var W0 = l - t;
            var x0 = x - X0; // The x,y,z,w distances from the cell origin
            var y0 = y - Y0;
            var z0 = z - Z0;
            var w0 = w - W0;
            // For the 4D case, the simplex is a 4D shape I won't even try to describe.
            // To find out which of the 24 possible simplices we're in, we need to
            // determine the magnitude ordering of x0, y0, z0 and w0.
            // Six pair-wise comparisons are performed between each possible pair
            // of the four coordinates, and the results are used to rank the numbers.
            var rankx = 0;
            var ranky = 0;
            var rankz = 0;
            var rankw = 0;
            if (x0 > y0) rankx++;
            else ranky++;
            if (x0 > z0) rankx++;
            else rankz++;
            if (x0 > w0) rankx++;
            else rankw++;
            if (y0 > z0) ranky++;
            else rankz++;
            if (y0 > w0) ranky++;
            else rankw++;
            if (z0 > w0) rankz++;
            else rankw++;
            var i1: number, j1: number, k1: number, l1: number; // The integer offsets for the second simplex corner
            var i2: number, j2: number, k2: number, l2: number; // The integer offsets for the third simplex corner
            var i3: number, j3: number, k3: number, l3: number; // The integer offsets for the fourth simplex corner
            // simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.
            // Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w
            // impossible. Only the 24 indices which have non-zero entries make any sense.
            // We use a thresholding to set the coordinates in turn from the largest magnitude.
            // Rank 3 denotes the largest coordinate.
            i1 = rankx >= 3 ? 1 : 0;
            j1 = ranky >= 3 ? 1 : 0;
            k1 = rankz >= 3 ? 1 : 0;
            l1 = rankw >= 3 ? 1 : 0;
            // Rank 2 denotes the second largest coordinate.
            i2 = rankx >= 2 ? 1 : 0;
            j2 = ranky >= 2 ? 1 : 0;
            k2 = rankz >= 2 ? 1 : 0;
            l2 = rankw >= 2 ? 1 : 0;
            // Rank 1 denotes the second smallest coordinate.
            i3 = rankx >= 1 ? 1 : 0;
            j3 = ranky >= 1 ? 1 : 0;
            k3 = rankz >= 1 ? 1 : 0;
            l3 = rankw >= 1 ? 1 : 0;
            // The fifth corner has all coordinate offsets = 1, so no need to compute that.
            var x1 = x0 - i1 + this.G4; // Offsets for second corner in (x,y,z,w) coords
            var y1 = y0 - j1 + this.G4;
            var z1 = z0 - k1 + this.G4;
            var w1 = w0 - l1 + this.G4;
            var x2 = x0 - i2 + 2.0 * this.G4; // Offsets for third corner in (x,y,z,w) coords
            var y2 = y0 - j2 + 2.0 * this.G4;
            var z2 = z0 - k2 + 2.0 * this.G4;
            var w2 = w0 - l2 + 2.0 * this.G4;
            var x3 = x0 - i3 + 3.0 * this.G4; // Offsets for fourth corner in (x,y,z,w) coords
            var y3 = y0 - j3 + 3.0 * this.G4;
            var z3 = z0 - k3 + 3.0 * this. G4;
            var w3 = w0 - l3 + 3.0 * this.G4;
            var x4 = x0 - 1.0 + 4.0 * this.G4; // Offsets for last corner in (x,y,z,w) coords
            var y4 = y0 - 1.0 + 4.0 * this.G4;
            var z4 = z0 - 1.0 + 4.0 * this.G4;
            var w4 = w0 - 1.0 + 4.0 * this.G4;
            // Work out the hashed gradient indices of the five simplex corners
            var ii = i & 255;
            var jj = j & 255;
            var kk = k & 255;
            var ll = l & 255;
            // Calculate the contribution from the five corners
            var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
            if (t0 < 0) n0 = 0.0;
            else {
                var gi0 = (this.perm[ii + this.perm[jj + this.perm[kk + this.perm[ll]]]] % 32) * 4;
                t0 *= t0;
                n0 = t0 * t0 * (this.grad4[gi0] * x0 + this.grad4[gi0 + 1] * y0 + this.grad4[gi0 + 2] * z0 + this.grad4[gi0 + 3] * w0);
            }
            var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
            if (t1 < 0) n1 = 0.0;
            else {
                var gi1 = (this.perm[ii + i1 + this.perm[jj + j1 + this.perm[kk + k1 + this.perm[ll + l1]]]] % 32) * 4;
                t1 *= t1;
                n1 = t1 * t1 * (this.grad4[gi1] * x1 + this.grad4[gi1 + 1] * y1 + this.grad4[gi1 + 2] * z1 + this.grad4[gi1 + 3] * w1);
            }
            var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
            if (t2 < 0) n2 = 0.0;
            else {
                var gi2 = (this.perm[ii + i2 + this.perm[jj + j2 + this.perm[kk + k2 + this.perm[ll + l2]]]] % 32) * 4;
                t2 *= t2;
                n2 = t2 * t2 * (this.grad4[gi2] * x2 + this.grad4[gi2 + 1] * y2 + this.grad4[gi2 + 2] * z2 + this.grad4[gi2 + 3] * w2);
            }
            var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
            if (t3 < 0) n3 = 0.0;
            else {
                var gi3 = (this.perm[ii + i3 + this.perm[jj + j3 + this.perm[kk + k3 + this.perm[ll + l3]]]] % 32) * 4;
                t3 *= t3;
                n3 = t3 * t3 * (this.grad4[gi3] * x3 + this.grad4[gi3 + 1] * y3 + this.grad4[gi3 + 2] * z3 + this.grad4[gi3 + 3] * w3);
            }
            var t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
            if (t4 < 0) n4 = 0.0;
            else {
                var gi4 = (this.perm[ii + 1 + this.perm[jj + 1 + this.perm[kk + 1 + this.perm[ll + 1]]]] % 32) * 4;
                t4 *= t4;
                n4 = t4 * t4 * (this.grad4[gi4] * x4 + this.grad4[gi4 + 1] * y4 + this.grad4[gi4 + 2] * z4 + this.grad4[gi4 + 3] * w4);
            }
            // Sum up and scale the result to cover the range [-1,1]
            return 27.0 * (n0 + n1 + n2 + n3 + n4);
        }

    }

}