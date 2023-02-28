//ordinal number
{
    var ordinalno = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    ordinalno.forEach(function (element) {
        if (element == 1) {
            console.log("".concat(element, "st"));
        }
        else if (element == 2) {
            console.log("".concat(element, "nd"));
        }
        else if (element == 3) {
            console.log("".concat(element, "rd"));
        }
        else {
            console.log("".concat(element, "th"));
        }
    });
}
