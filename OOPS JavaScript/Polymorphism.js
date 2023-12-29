// Polymorphism 
// Poly :- Many
// Morphs:- forms
// Polymorphism = Many Forms

class Employee{

    constructor(name){
        this.name = name
    }

    eats(){
        console.log (this.name+' eats food');
    }
}

class Person extends Employee{

    eats(){
        super.eats();//Super keyword is used to call the parent objects function in the child class
        console.log (this.name+' eats fishes');
    }
}

let murphy = new Person('Murphy');
murphy.eats();
