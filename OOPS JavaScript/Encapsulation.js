// Encapsulation is a mechanism of restricting direct access to some of objects to component
// Security


class Employee {
     // Set data function to insert data 
    setData(id,name,number){
        this.id = id;
        this.name = name;
        this.number = number;
    }
    //
    getid(){
        return this.id;
    }
    getName(){
        return this.name;
    }

    getNumber(){
        return this.number;
    }


}

let emp1 = new Employee(); 
emp1.setData(1 , "Gaurav", 7045693816);
console.log(emp1.getName());
console.log(emp1.getNumber());
console.log(emp1.getid());