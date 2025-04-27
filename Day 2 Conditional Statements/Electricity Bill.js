let prompt = require('prompt-sync')();
let units = Number(prompt("Enter your units : "));
if (isNaN(units)) {
    console.log("Please enter a valid number for units");
}
else{
    ElectricityBill(units);
}
function ElectricityBill(units) {
    let bill = 0;
    if(units > 400){
        bill+= (units-400)*13;
        units = 400;
    }
    if(units > 200 && units <= 400){
        bill+= (units-200)*8;
        units = 200;
    }
    if(units > 100 && units <= 200){
        bill+= (units-100)*6
        units = 100;
    }
    if(units > 0 && units <= 100){
        bill+= units*5;
        units = 0;
    }
    console.log(`Your Bill amount is ${bill}`);
}