//great magician 
{
    let magicians:string[]=["David Copperfield", "Doug Henning", "David Blane", "Launce Burton"];
    show_magicians(magicians);
    make_great(magicians);
    show_magician(magicians);

    function show_magicians(magicians:string[]){

        console.log(`Top Level Magicians in the world are: `)
        
        magicians.forEach(element => {
            console.log(`${element}`);
        });
    }

    function make_great(mag:string[]){
        for(let i=0; i<mag.length; i++){
            mag[i]=mag[i]+" Great";
        }
    }
    function show_magician(magician:string[]){
    console.log(`\nafter mofifying array of magician: \n`)
        magicians.forEach(element => {
            console.log(`${element}`);
        });       
    }
}