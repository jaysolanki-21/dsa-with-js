function sort(arr, first, mid, last) {
    let temp = new Array(last - first + 1);
    let i = first;
    let j = mid + 1;
    let k = 0;
    while (i <= mid && j <= last) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    while (i <= mid) {
        temp[k++] = arr[i++];
    }
    while (j <= last) {
        temp[k++] = arr[j++];
    }
    for (let i = first, k = 0; i <= last; i++, k++) {
        arr[i] = temp[k];
    }
}

function devide(arr, first, last) {
    let mid = Math.floor((first + last) / 2);
    if (first >= last) return;
    devide(arr, first, mid);
    devide(arr, mid + 1, last);
    sort(arr, first, mid, last);
}

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
devide(arr, 0, arr.length - 1);
console.log(arr);