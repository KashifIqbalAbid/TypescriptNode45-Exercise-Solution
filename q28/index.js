//stages of life
{
    var age = 65;
    if (age < 2) {
        console.log("Person is baby");
    }
    else if (age >= 2 && age < 4) {
        console.log("Person is toddler");
    }
    else if (age >= 4 && age < 13) {
        console.log("Person is kid");
    }
    else if (age >= 13 && age < 20) {
        console.log("Person is teenager");
    }
    else if (age >= 20 && age < 65) {
        console.log("Person is adult");
    }
    else if (age >= 65) {
        console.log("Person is elder");
    }
    else {
        console.log("no age record found");
    }
}
