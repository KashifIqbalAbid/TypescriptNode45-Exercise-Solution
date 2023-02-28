//sandqich
{
    let potato_sandwich:string[]=["Potato", "Spices", "Herbs", "Bread"];
    let Tomato_sandwich:string[]=["Mayo", "Hung Curd", "Sauce", "Cheese"];
    let paner_sandwich:string[]=["Paneer", "Bread", "Sauce"];

    make_sandwich(potato_sandwich);
    make_sandwich(Tomato_sandwich);
    make_sandwich(paner_sandwich);

   function make_sandwich(sand:string[]){
    console.log(`The sandwich that I am going to order contains following items: `);
    sand.forEach(element => {
        console.log(element);
    });
   }
}