class BookingForm {

    fillForm(name , age, travel){
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

let person1 = new BookingForm;
person1.fillForm("Gaurav",22,"Gujrat");
person1.submit();
let person2 = new BookingForm;
person2.fillForm("Om");
person2.cancel();
