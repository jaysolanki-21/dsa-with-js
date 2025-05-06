// Remove Duplicate from sorted array

let arr = [0,0,1,1,2,2];
let j = 1
for(let i=0;i<arr.length;i++){
    if(arr[i] != arr[j]){
        arr[j] = arr[i]
        j++
    }
}
console.log(arr);