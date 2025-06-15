// sort the people [leetcode 2418]

let arr = ["Mary","John","Emma"];
let height = [180,165,170];
let ans = []
let map = new Map();

for (let i = 0; i < arr.length; i++) {
    map.set(height[i],arr[i]);
}
console.log(map);

let sortedheight = height.sort((a,b) => b-a);

for (let i = 0; i < sortedheight.length; i++) {
    ans.push (map.get(sortedheight[i]));
}

console.log(ans);