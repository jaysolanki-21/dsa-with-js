function rectangle(l,b){
    let area=l*b;
    let perimeter=2*(l+b);
    return [area,perimeter];
}
console.log("Area and perimeter of rectangle:",rectangle(4,5));