const prompt = require("prompt-sync")()


const deposit = () => {
    const depositAmount = prompt("Enter deposit amount: "); //deposit amount will be in string
    const numberDepositAmount = parseFloat(depositAmount);

    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log("Inavalid deposit amount , TRY AGAIN !")
    }else{
        return numberDepositAmount ;
    }
};

deposit();