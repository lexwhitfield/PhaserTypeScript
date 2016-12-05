export namespace Functions {

    export function degrees_to_radians(a: number): number {
        return a * Math.PI / 180;
    }

    export function radians_to_degrees(a: number): number {
        return a * 180 / Math.PI;
    }

}