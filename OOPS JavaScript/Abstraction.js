// Abstraction is a way of hiding the implementation details and showing only the functionality to the users
//For example calculator in backend how  the things are performing we dont matter we just ahve to click button and use the functionality
//Abstraction is hide details and show essantial things
// It hides the certain details and show the essential features of the object.
// Approach allows us for maintainibilty and understandibility


function Employee(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;

    let monthlyBonus = 1500;

    let calculateFinalSalary = function(){
        let finalSalary = baseSalary + monthlyBonus;
        console.log ('Final Salary is : '+finalSalary);
    }

    this.getEmpDetails = function (){
        console.log ('Name : '+this.name+' | Age : '+this.age);
        calculateFinalSalary();
    }
}

let emp1 = new Employee('Gaurav', 30, 2000);
emp1.getEmpDetails();

