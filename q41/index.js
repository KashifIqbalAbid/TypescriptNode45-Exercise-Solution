//magecian
{
    var magicians = ["David Copperfield", "Doug Henning", "David Blane", "Launce Burton"];
    show_magicians(magicians);
    function show_magicians(magicians) {
        console.log("Top Level Magicians in the world are: ");
        magicians.forEach(function (element) {
            console.log("".concat(element));
        });
    }
}
