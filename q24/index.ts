
{

let mylist=["Jehlum River","K2", "Mount Everist", "Mustang", "Rawalpindi", "Islamabad", "Punjabi", "Pushto"];
let car:string ="BMW";
let friend:string ="Hasnain";
let age:number =25;
let city:string ="Rawalpindi";
let subject:string ="Computer Science";

//test
console.log("Test using equality and inequality");
console.log(car=="BMW");//true
console.log(car=="Ferari");//false

console.log(car!="Ferari");//true
console.log(car!="BMW");//false

console.log(car.toLowerCase()==="bmw");//true
console.log(car.toLowerCase()!="BMW");//true
console.log(car.toLowerCase()!="bmw");//false
console.log(car.toLowerCase()!="bmw");//false

console.log("Numerical Test");

console.log(age==25);//true
console.log(age>=19);//true
console.log(age<21);//false
console.log(age<=29);//true
console.log(age>20);//true

console.log("Test using 'and' and 'or'");

console.log(age==25 && car=="BMW");//true
console.log(age==25 || car=="ferrai");//true
console.log(age==20 && car=="BMW");//false
console.log(age==20 || car=="ferrai");//false

var isfound=false;

// element in rarray
mylist.forEach(element => {
    if(element=="K2"){
    isfound=true;
    }
});
console.log((isfound?"element found in array": "element not found in array"));
isfound=false;
//element not in array
mylist.forEach(element => {
    if(element=="Kashmir"){
    console.log(`element found in array`);
    isfound=true;
    }
});
console.log((isfound?"element found in array": "element not found in array"));

}