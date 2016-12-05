System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PhaserCommon;
    return {
        setters:[],
        execute: function() {
            (function (PhaserCommon) {
                var Functions;
                (function (Functions) {
                    function degrees_to_radians(a) {
                        return a * Math.PI / 180;
                    }
                    Functions.degrees_to_radians = degrees_to_radians;
                    function radians_to_degrees(a) {
                        return a * 180 / Math.PI;
                    }
                    Functions.radians_to_degrees = radians_to_degrees;
                })(Functions = PhaserCommon.Functions || (PhaserCommon.Functions = {}));
            })(PhaserCommon = PhaserCommon || (PhaserCommon = {}));
            exports_1("PhaserCommon", PhaserCommon);
        }
    }
});
//# sourceMappingURL=common.js.map