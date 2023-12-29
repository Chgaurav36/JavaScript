class BookingForm {

    constructor(name , age, travel){
        this.name  = name;
        this.age  = age;
        this.travel = travel;
    }

    submit(){
        console.log(this.name +" Your Ticket is Booked");
    }

    cancel(){
        console.log(this.name + " Ticket canceled");
    }

}

//Created a form for person 1 
//Constructor is called by default when object is created  
let person1 = new BookingForm("Gaurav",22,"Gujrat");

person1.submit();
let person2 = new BookingForm("Om");
//Created a form for person 2 

person2.cancel();
