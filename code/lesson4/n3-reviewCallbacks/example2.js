// const numbers = [23, 2, 10, 5, 5, 19, 29, 20];


// const onlyBigNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);

//     if (numbers[i] > 10) {
//         onlyBigNumbers.push(numbers[i]);
//     }
// }

// console.log(onlyBigNumbers);



const numbers = [23, 2, 10, 5, 5, 19, 29, 20];

const onlyBigNumbers = numbers.filter(function(element) {
    console.log(element);
    return element > 10;
});

console.log(onlyBigNumbers);