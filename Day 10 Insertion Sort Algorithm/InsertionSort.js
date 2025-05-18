let arr = [5,10,1,7,3];
let n = arr.length;

for(let i=1;i<n;i++){
    let current = arr[i];
    let j = i-1;
    while(arr[j]>current && j>=0){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = current;
}
console.log(arr);