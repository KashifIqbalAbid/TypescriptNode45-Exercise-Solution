{
    var personname = "muhammad kashif iqbal abid";
    console.log("name in lowercase ".concat(personname.toLowerCase()));
    console.log("name in lowercase ".concat(personname.toUpperCase()));
    console.log("name in titlecase ".concat(toTitleCase(personname)));
    function toTitleCase(str) {
        return str.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        });
    }
}
