// print frequency of each number

let arr = [10,45,19,18,9,9 ,10,45,10,10]

let map = new Map();

for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1);
    }else{
        map.set(arr[i],1);
    }
}

console.log(map);