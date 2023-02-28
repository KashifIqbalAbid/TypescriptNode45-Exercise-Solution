//sandqich
{
    var potato_sandwich = ["Potato", "Spices", "Herbs", "Bread"];
    var Tomato_sandwich = ["Mayo", "Hung Curd", "Sauce", "Cheese"];
    var paner_sandwich = ["Paneer", "Bread", "Sauce"];
    make_sandwich(potato_sandwich);
    make_sandwich(Tomato_sandwich);
    make_sandwich(paner_sandwich);
    function make_sandwich(sand) {
        console.log("The sandwich that I am going to order contains following items: ");
        sand.forEach(function (element) {
            console.log(element);
        });
    }
}
