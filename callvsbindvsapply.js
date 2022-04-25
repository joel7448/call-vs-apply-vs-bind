//CALL :-
// CALL invokes the function and allows you to pass in arguments one by one.
//The call() method invokes a function with a given 'this' value and arguments provided one by one. 
//This means that we can call any function, and explicitly specify what 'this' should reference within the calling function.

//EXAMPLE FOR CALL METHOD.
var student = {
    English : 100,
    Maths : 60 , 
    Social : 80,
    Science : 90,
    Language : 80, 

}

function getstudentmarks(subject){
    return `${subject} marks is ${this.English}`;
}
console.log(getstudentmarks.call(student,"English"));

//APPLY :-
// Apply invokes the function and allows you to pass in arguments as an array.
// EXAMPLE OF APPLY METHOD.
var car = {
    Brand : "BMW",
    Model : "x6",
    Engine : "V8",
    Onroadprice: "1.1 Cr",
}
function getcar(greetings,customername){
    return `${greetings},${customername} the ${this.Brand}${this.Model} with ${this.Engine} onroad price is ${this.Onroadprice} `;
}
console.log(getcar.apply(car,["hello","Joel"])); 

//BIND METHOD
//returns a new function, allowing you to pass in an array and any number of arguments.
var space={
    galaxy : "Milky way" ,
    cluster : "lanaekea" , 
    starsystem : "solar system" ,
}
function getuniverse(planet){
    return `Our ${planet} is situated in the ${this.starsystem} of the ${this.galaxy} galaxy which is inside the ${this.cluster} supercluster `;
} 
var universe = getuniverse.bind(space);
console.log(universe("earth"));