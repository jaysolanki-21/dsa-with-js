// sum of subarray with sum k

let nums = [1, 1, 1];
let k = 2;

let map = new Map();
let sum = 0;
let count = 0;

map.set(0, 1); 

for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map.has(sum - k)) {
        count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
}

console.log(count); 
