//no users:
{
    let users=["admin", "manager", "auditor", "researcher", "developer"];
    if(users.length==0)
    console.log("we need to find some users");
    
    //printing msg to users
    users.forEach(element => {
        console.log((element=="admin"?`Hello ${element}, would you like to see a status report`:`Hello ${element}, thanks for logging in again.`));
    });

    //emtying users array
    let userscount=users.length;
    for(var i=0; i<userscount; i++){
        users.pop();
    }
    console.log(users);

    console.log("we need some more users");    
}