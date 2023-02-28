//cities
{
    //calling function 
    describe_city("Karachi");
    describe_city("Multan", "Pakistan");
    describe_city("Texas", "USA");
    describe_city("Delhi", "India");
    function describe_city(city, country) {
        if (country === void 0) { country = "Pakistan"; }
        console.log("".concat(city, " is in ").concat(country));
    }
}
