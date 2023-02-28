//pizza 
{
    var fav_pizza = ["Cheese", "Veggei", "Pepperoni"];
    console.log("The pizzas that i mostly like are: ");
    fav_pizza.forEach(function (element) {
        console.log(element);
    });
    for (var i = 0; i < fav_pizza.length; i++) {
        console.log("I like ".concat(fav_pizza[i], " Pizza"));
    }
    console.log("The best pizza we ever had in Islamabad!! The pizza was so delicious and \nwith so many flavor could choose that we even visited the pizza shop twice in the same \nday! You could just take away or standing finish your pizza in the store. I really love Pizza");
}
