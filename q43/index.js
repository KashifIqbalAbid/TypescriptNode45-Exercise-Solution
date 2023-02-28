//unchanged magician
{
    var magicians = ["David Copperfield", "Doug Henning", "David Blane", "Launce Burton"];
    var tempmag = [];
    //show_magicians(magicians);
    var magician_with_great = [];
    magician_with_great = make_great(magicians);
    //calling with original names
    console.log("calling magician names with original names: ");
    show_magician(magicians);
    //calling with great
    console.log("calling magician names with \"Great\" added: ");
    show_magician(magician_with_great);
    // function show_magicians(magicians:string[]){
    //     console.log(`Top Level Magicians in the world are: `)   
    //     magicians.forEach(element => {
    //         console.log(`${element}`);
    //     });
    // }
    function make_great(mag) {
        for (var i = 0; i < mag.length; i++) {
            tempmag[i] = mag[i] + " Great";
        }
        return tempmag;
    }
    function show_magician(magi) {
        magi.forEach(function (element) {
            console.log("".concat(element));
        });
    }
}
