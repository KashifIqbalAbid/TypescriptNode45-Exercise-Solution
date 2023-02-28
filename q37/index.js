{
    var size = ["Large", "Medium", "Small", "very small"];
    var msg = "I Love Typescript";
    make_shirt(size, msg);
    function make_shirt(size, message) {
        var mess = ["all is well", "have a nice day", "Looking good"];
        size.forEach(function (element) {
            if (element == "Large" || element == "Medium") {
                console.log("Shirt size will be: ".concat(element, "\n Shirt text will be: ").concat(message));
            }
            else {
                console.log("Size: ".concat(element, ", Message: ").concat(mess[Math.floor(Math.random() * 3)]));
            }
        });
    }
}
