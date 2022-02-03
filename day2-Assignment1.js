// Single Program for both problems

// Function to check if a number is odd or even

const oddEvenCheck = (num) => {
    if (num % 2 === 0) {
        console.log(`Number ${num} is Even.`);
    } else {
        console.log(`Number ${num} is Odd.`);
    }
};

// Function to check if a number is a perfect square
const checkPerfectSquare = (num) => {
    let flag = false;
    for (let i = 1; i <= num / 2; i++) {
        if (i * i === num) {
            flag = true;
            break;
        }
    }

    if (flag === true) {
        console.log(`Number ${num} is a perfect square.`);
    } else {
        console.log(`Number ${num} is not a perfect square.`);
    }
};

let num = 25;

oddEvenCheck(num);
checkPerfectSquare(num);
