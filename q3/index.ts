{
    let personname:string=`muhammad kashif iqbal abid`;
    console.log(`name in lowercase ${personname.toLowerCase()}`);
    console.log(`name in lowercase ${personname.toUpperCase()}`);
    console.log(`name in titlecase ${toTitleCase(personname)}`);

    function toTitleCase(str:string){
        return str.toLowerCase().split(' ').map(function(word:string){
            return (word.charAt(0).toUpperCase() + word.slice(1));
        })
    }
}