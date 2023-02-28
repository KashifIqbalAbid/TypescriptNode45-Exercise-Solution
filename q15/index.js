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
}
