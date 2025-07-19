//Stock span problem

function stockSpan(prices) {
    const n = prices.length;
    const result = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (prices[i] >= prices[j]) {
                result[i] += 1;
            } else {
                break;
            }
        }
    }

    return result;
}

const prices = [100, 80, 60, 70, 60, 75, 85];
const result = stockSpan(prices);
console.log(result);