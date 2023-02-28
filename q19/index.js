//printing number of guests
var guests = ["Hasnain", "Irfan", "Hamza", "Umer", "Taj Din", "Afzal"];
guests.forEach(function (element) {
    console.log("hi ".concat(element, ", I am sending my warmest invitaion to this dinner party"));
});
console.log("Total guest I am going to invite on dinner are: " + guests.length);
