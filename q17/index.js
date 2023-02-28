//Shrinking Guest List:
{
    var friends = ["Hasnain", "Irfan", "Hamza"];
    friends.forEach(function (element) {
        console.log("hi ".concat(element, ", I am sending my warmest invitaion to this dinner party"));
    });
    console.log("\n");
    //mesage to inform about bigger table
    console.log("hi eveybody we have a bigger table for dinner, so some new guest will join us");
    //adding element at start
    friends.splice(0, 0, "Qamar");
    //adding in begining of element
    friends.splice(friends.length / 2, 0, "Hassan Ali");
    //adding at end of array
    friends.push("M Ashraf");
    //printing msg for new guests
    console.log("\n");
    friends.forEach(function (element) {
        console.log("hi ".concat(element, " i would like to invite you dinner"));
    });
    //printing msg to inform guest about limied space
    console.log("it is to inform you, we have space for only two guests");
    //poping guest from list
    var index = 0;
    var len = friends.length;
    console.log("\n");
    for (index = 0; index < len; index++) {
        var member = friends.pop();
        console.log("We are very sorry ".concat(member, ", we can not invite you to dinner."));
        if (friends.length == 2)
            break;
    }
    console.log("\n");
    friends.forEach(function (element) {
        console.log("Hello ".concat(element, ", i would like to invite you on dinner"));
    });
    friends.pop();
    friends.pop();
    console.log("Guest in List: ".concat(friends));
}
