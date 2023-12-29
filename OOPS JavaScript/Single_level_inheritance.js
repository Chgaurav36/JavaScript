class Animal {
    constructor(name , colour){
        this.name = name;
        this.colour = colour;

    }

    shout(){
        console.log(this.name + "  is shouting");
    }


}
class Monkey extends Animal {

    eatBanana(){
        console.log(this.name +"  is " + this.colour + " in colour");
    }
}




let ani  = new Animal("Bruno" , "Brown");
let dog = new Monkey("Bella" , "White");

console.log(ani.shout());
console.log(dog.eatBanana());
console.log(dog.shout());

