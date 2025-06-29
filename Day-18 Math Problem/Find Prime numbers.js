let n = 30;
let arr = new Array(n+1).fill(true);
arr[0] = arr[1] = false;
// console.log(arr);

for(let i = 2 ; i <= Math.floor(Math.sqrt(n));i++){
    if(arr[i]){
        for(let j = i*i;j<=n;j+=i){
            arr[j] = false;
        }
    }
}

for(let i=2;i<=n;i++){
    if(arr[i]){
        console.log(i)
    }
}