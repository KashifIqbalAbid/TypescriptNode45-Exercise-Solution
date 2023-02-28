//Hello Admin:
{
    var users = ["admin", "manager", "auditor", "researcher", "developer"];
    users.forEach(function (element) {
        console.log((element == "admin" ? "Hello ".concat(element, ", would you like to see a status report") : "Hello ".concat(element, ", thanks for logging in again.")));
    });
}
