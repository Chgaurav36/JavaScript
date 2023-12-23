const winner = document.getElementById("result");
const winner1 = document.getElementById("result1");
let user = prompt("Enter S , P or C");
let cpui = Math.floor(Math.random() * 3);
let cpu = ["S" , "P" , "C"][cpui]

const match = (cpu,user) =>{
    if(cpu===user){
        return "TieD"
    }
    else if(cpu == "S" && user == "P"){
        return "Computer wins"
    }
    else if(cpu == "S" && user == "C"){
        return "User wins"
    }
    else if(cpu == "P" && user == "C"){
        return "User wins"
    }
    else if(cpu == "P" && user == "S"){
        return "Computer wins"
    } 
    else if(cpu == "C" && user == "S"){
        return "User wins"
    }
    else if(cpu == "C" && user == "P"){
        return "Computer wins"
    }
}

const result = match(cpu,user);
winner.innerHTML = `CPU:${cpu}  USER:${user} `;
winner1.innerHTML = `${result}`;