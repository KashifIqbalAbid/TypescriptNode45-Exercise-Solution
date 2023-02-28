//index error
{
    let mylist=["Jehlum River","K2", "Mount Everist", "Mustang", "Rawalpindi", "Islamabad", "Punjabi", "Pushto"];
    
    //accessing invalid index
    try{
       var item= mylist[12];
    throw item;
    }catch(err){
        console.log(err);
    }
    
    //correcting error
    console.log(mylist[2]);

}
