{
    var friends = ["Hasnain", "Irfan", "Hamza"];
    friends.forEach(function (element) {
        console.log("hi ".concat(element, ", I am sending my warmest invitaion to this dinner party"));
    });
    console.log("\n");
    console.log("unfortunatily ".concat(friends[2], " can not attend the dinner"));
    //replacing with new guest
    friends[2] = "Shahid iqbal";
    console.log("\n");
    friends.forEach(function (element) {
        console.log("hi ".concat(element, ", I am sending my warmest invitaion to this dinner party once again"));
    });
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
}
