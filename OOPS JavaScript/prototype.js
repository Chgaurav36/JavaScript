let a = {
    name: "Gaurav",
    id : 1
}
console.log(a.name);  //Output:- Gaurav

let b = {
    surname: (a) => {
        console.log( a  +"hello")
    }
}

b.__proto__ = {
    name2: "Gaurav CHaurasia"
}

a.__proto__ = b;

console.log(a.surname("passed by value"));// first it will search for the surname in object a and if it does not find 
//then it will search in its prototype b and the will return the result.

console.log(a.name2); 