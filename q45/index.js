{
    var mycar = {};
    mycar = carinfo("AUdi", "A7", "Color: WHite", "Breaks: Automatic");
    console.log(mycar);
    function carinfo(manufac, model) {
        var argu = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            argu[_i - 2] = arguments[_i];
        }
        return {
            manufacturer: manufac,
            model: model,
            features: argu
        };
    }
}
