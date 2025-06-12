// Longest subarray with sum k leetcode 560

let nums = [10,5,2,7,1,-10];
let k = 15;

//ans = 6  

let map = new Map();
let sum = 0;
let ans = 0;

for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum == k) {
        ans = i + 1;
    } else {
        if (map.has(sum - k)) {
            ans = Math.max(ans, i - map.get(sum - k));
        }
    }
    if (!map.has(sum)) {
        map.set(sum, i);
    }
}
console.log(ans);