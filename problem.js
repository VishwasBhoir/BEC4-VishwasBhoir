let arr = [1, 0, 1, 1, 0, 0, 0];
for (let index = arr.length - 1; index > 0; index--) {
    for (let i = 0; i < index; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
}

console.log(arr);


// counting the numbers

let count0 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        count0++;
    }

}

for (let i = 0; i < arr.length; i++) {
    if (count0 > 0) {
        arr[i] = 0;
        count0--;
    } else {
        arr[i] = 1;
    }

}

console.log(arr);

