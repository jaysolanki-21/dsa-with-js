// Merge and Sort
let arr1 = [1,5,9];
let arr2 = [2,3,4,6,7];

let merge = new Array(arr1.length + arr2.length);
let i = 0;
let j = 0;
let k = 0;
while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        merge[k++] = arr1[i++];
    }
    else{
        merge[k++] = arr2[j++];
    }
    }

    while(i<arr1.length){
        merge[k++] = arr1[i++];
    }

    while(j<arr2.length){
        merge[k++] = arr2[j++];
    }
    console.log(merge);