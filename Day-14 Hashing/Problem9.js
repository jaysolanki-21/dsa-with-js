let nums = [100, 4, 200, 1, 3, 2];
let numSet = new Set(nums);
let longestStreak = 0;

for (let num of numSet) {
    if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentStreak = 1;
        while (numSet.has(currentNum + 1)) {
            currentNum++;
            currentStreak++;
        }
        longestStreak = Math.max(longestStreak, currentStreak);
    }
}

console.log(longestStreak); 
