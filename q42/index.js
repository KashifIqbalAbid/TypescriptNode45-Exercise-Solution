//magician 
{
    var magicians_1 = ["David Copperfield", "Doug Henning", "David Blane", "Launce Burton"];
    show_magicians(magicians_1);
    make_great(magicians_1);
    show_magician(magicians_1);
    function show_magicians(magicians) {
        console.log("Top Level Magicians in the world are: ");
        magicians.forEach(function (element) {
            console.log("".concat(element));
        });
    }
    function make_great(mag) {
        for (var i = 0; i < mag.length; i++) {
            mag[i] = mag[i] + " Great";
        }
    }
    function show_magician(magician) {
        console.log("\nafter mofifying array of magician: \n");
        magicians_1.forEach(function (element) {
            console.log("".concat(element));
        });
    }
}
