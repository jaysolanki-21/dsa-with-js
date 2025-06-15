//two sum leetcode 1

let nums = [2,7,11,15];
let target = 9;

let map = new Map();

for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if(map.has(diff)){
        console.log([map.get(diff),i]);
    }else{
        map.set(nums[i],i);
    }
}