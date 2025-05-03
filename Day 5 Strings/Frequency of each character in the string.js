// Frequency of each character in the string

function charFrequency(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
       if(obj[str[i]]){
           obj[str[i]]++;
       }
       else{
           obj[str[i]] = 1;
       }
    }
    return obj;
}

console.log(charFrequency("google.com"));