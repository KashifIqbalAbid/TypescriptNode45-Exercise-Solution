//unchanged magician
{
    let magicians:string[]=["David Copperfield", "Doug Henning", "David Blane", "Launce Burton"];
    var tempmag:string[]=[];

    //show_magicians(magicians);
    let magician_with_great:string[] = [];
    magician_with_great = make_great(magicians);
    
    //calling with original names
    console.log(`calling magician names with original names: `)
    show_magician(magicians);
    //calling with great
    console.log(`calling magician names with "Great" added: `)
    show_magician(magician_with_great);


    // function show_magicians(magicians:string[]){
    //     console.log(`Top Level Magicians in the world are: `)   
    //     magicians.forEach(element => {
    //         console.log(`${element}`);
    //     });
    // }
    function make_great(mag:string[]):string[]{
        for(let i=0; i<mag.length; i++){
            tempmag[i]=mag[i]+" Great";
        }
        return tempmag;
    }
    function show_magician(magi:string[]){

        magi.forEach(element => {
            console.log(`${element}`);
        });       
    }
}