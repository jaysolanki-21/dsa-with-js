let arr = [5,10,1,7,3];
let n = arr.length;
for(let i=0;i<n-1;i++){
    let min = i;
    for(let j=i+1;j<n;j++){
        if(arr[j]<arr[min]){
          min = j;
        }   
    }
    let temp = arr[i];
    arr[i]=arr[min];
    arr[min]=temp;
}
console.log(arr);