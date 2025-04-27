let prompt = require('prompt-sync')();
let discount =0;
function ShopDiscount(price) {
    if (price > 0 && price <= 5000) {
        discount = 0;
    } 
    else if (price > 5000 && price <= 7000) {
        discount = 5;
    } 
    else if (price > 7000 && price <= 9000) {
        discount = 10;
    }
    else{
        discount = 20;
    }
    console.log(`Your Bill amount is ${price} and your discount is ${discount}% and your Payable amount is ${price-(price*discount/100)}`);
}

let price = Number(prompt("Enter your Shop Bill amount : "));
if (isNaN(price)) {
    console.log("Please enter a valid number for Bill amount");
}
else{
    ShopDiscount(price);
}