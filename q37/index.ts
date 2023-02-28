//large shirt
{
    let size:string[]=["Large","Medium", "Small","very small"];
    let msg:string="I Love Typescript";
    make_shirt(size, msg);

    function make_shirt(size:string[], message:string){
        let mess=["all is well", "have a nice day", "Looking good"]
        size.forEach(element => {
            if(element=="Large" || element=="Medium"){
                console.log(`Shirt size will be: ${element}\n Shirt text will be: ${message}`);
            }else{
                console.log(`Size: ${element}, Message: ${mess[Math.floor(Math.random() * 3)]}`);
            }
        });
    }
}