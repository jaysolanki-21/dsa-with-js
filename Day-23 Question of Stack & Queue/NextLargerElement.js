// Next Larger Element

function nextLargerElement(arr) {
    let stack = [];
    let result = new Array(arr.length).fill(-1);
    
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1];
        }
        
        stack.push(arr[i]);
    }
    
    return result;
}

// Example usage:
const arr = [1, 3, 2, 4];
const result = nextLargerElement(arr);
console.log(result);
