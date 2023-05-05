


function myAwesomeFilter(array, callback) {

    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if ( callback( array[i] )  === true) {
            newArray.push(numbers[i]);
        }
    }
    return newArray;
}


const numbers = [23, 2, 10, 5, 5, 19, 29, 20];

const onlyBigNumbers = myAwesomeFilter(numbers, function(element) {
    console.log(element);
    return element > 10;
});

console.log(onlyBigNumbers);
