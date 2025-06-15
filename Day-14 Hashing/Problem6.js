// Intersection of Two arrays leetcode 349

let nums1 = [1,2,2,1];
let nums2 = [2,2];

let set1 = new Set(nums1);
let set2 = new Set(nums2);

let ans = [];

for (let num of set1) {
    if (set2.has(num)) {
        ans.push(num);
    }
}

console.log(ans);

