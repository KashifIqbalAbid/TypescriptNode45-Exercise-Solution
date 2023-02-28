{
    let friends=["Hasnain", "Irfan", "Hamza"];
    
friends.forEach(element => {
    console.log(`hi ${element}, I am sending my warmest invitaion to this dinner party`)
});
console.log(`\n`);

console.log(`unfortunatily ${friends[2]} can not attend the dinner`);
//replacing with new guest
friends[2]="Shahid iqbal";
console.log(`\n`);
friends.forEach(element => {
    console.log(`hi ${element}, I am sending my warmest invitaion to this dinner party once again`)
});
}