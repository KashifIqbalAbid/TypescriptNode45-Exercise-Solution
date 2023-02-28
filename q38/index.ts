//cities
{
//calling function 
describe_city("Karachi");
describe_city("Multan", "Pakistan");
describe_city("Texas", "USA");
describe_city("Delhi", "India");

function describe_city(city:string, country:string="Pakistan"):void{
console.log(`${city} is in ${country}`);
}
}