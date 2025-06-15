function heronsArea(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

console.log("Area of triangle:", heronsArea(5, 6, 7).toFixed(2));  // Example output: 14.70
