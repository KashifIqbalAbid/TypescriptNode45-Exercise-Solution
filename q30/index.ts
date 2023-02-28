//Hello Admin:
{
    let users=["admin", "manager", "auditor", "researcher", "developer"];
    users.forEach(element => {
        console.log((element=="admin"?`Hello ${element}, would you like to see a status report`:`Hello ${element}, thanks for logging in again.`));
    });
}