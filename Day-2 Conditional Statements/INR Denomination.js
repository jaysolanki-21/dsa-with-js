let prompt = require('prompt-sync')();
let amount = Number(prompt("Enter your amount : "));
if (isNaN(amount)) {
    console.log("Please enter a valid number for amount");
}
else{
    INRDenomination(amount);
}

function INRDenomination(amount) {
    if(amount>=2000){
        let currency = Math.floor(amount / 2000)
        amount = amount % 2000;
        console.log(`2000 notes : ${currency}`);
    }
    if(amount >=500){
        let currency = Math.floor(amount / 500)
        amount = amount % 500;
        console.log(`500 notes : ${currency}`);
    }
    if(amount >= 200){
        let currency = Math.floor(amount / 200)
        amount = amount % 200;
        console.log(`200 notes : ${currency}`);
    }
    if(amount >= 100){
        let currency = Math.floor(amount / 100)
        amount = amount % 100;
        console.log(`100 notes : ${currency}`);
    }
    if(amount >= 50){
        let currency = Math.floor(amount / 50)
        amount = amount % 50;
        console.log(`50 notes : ${currency}`);
    }
    if(amount >= 20){
        let currency = Math.floor(amount / 20)
        amount = amount % 20;
        console.log(`20 notes : ${currency}`);
    }
    if(amount >= 10){
        let currency = Math.floor(amount / 10)
        amount = amount % 10;
        console.log(`10 notes : ${currency}`);
    }
    if(amount >= 5){
        let currency = Math.floor(amount / 5)
        amount = amount % 5;
        console.log(`5 notes : ${currency}`);
    }
    if(amount >= 2){
        let currency = Math.floor(amount / 2)
        amount = amount % 2;
        console.log(`2 notes : ${currency}`);
    }
    if(amount >= 1){
        let currency = Math.floor(amount / 1)
        amount = amount % 1;
        console.log(`1 notes : ${currency}`);
    }
}