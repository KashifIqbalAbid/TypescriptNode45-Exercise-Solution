//car
{
    let mycar={};
    mycar=carinfo("AUdi", "A7", "Color: WHite", "Breaks: Automatic");
    
    console.log(mycar);
    
    function carinfo(manufac:string, model:string, ...argu:string[]){
    return {
        manufacturer:manufac,
        model:model,
        features:argu
    };
    }
}