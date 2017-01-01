export var Functions;
(function (Functions) {
    function degrees_to_radians(a) {
        return a * Math.PI / 180;
    }
    Functions.degrees_to_radians = degrees_to_radians;
    function radians_to_degrees(a) {
        return a * 180 / Math.PI;
    }
    Functions.radians_to_degrees = radians_to_degrees;
})(Functions || (Functions = {}));
//# sourceMappingURL=common.js.map