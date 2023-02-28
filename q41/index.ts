//magecian
{
    let magicians:string[]=["David Copperfield", "Doug Henning", "David Blane", "Launce Burton"];
    show_magicians(magicians);

    function show_magicians(magicians:string[]){

        console.log(`Top Level Magicians in the world are: `)
        
        magicians.forEach(element => {
            console.log(`${element}`);
        });
    }
}