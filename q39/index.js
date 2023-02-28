//city country
{
    console.log(city_country("Karachi", "Pakistan"));
    console.log(city_country("Delhi", "India"));
    console.log(city_country("Florida", "USA"));
    function city_country(city, country) {
        return "\"".concat(city, ", ").concat(country, "\"");
    }
}
