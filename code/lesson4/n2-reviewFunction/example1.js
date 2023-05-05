
function calculareCircleArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    
    return area;
}

function calculareCirclePerimeter(radius) {
    const area = Math.PI * radius * 2;
    
    return area;
}


const number = 5;
const someOtherNumber = 15;
const radius = 10;

const result1 = calculareArea(6);
const result2 = calculareArea(number);
const result3 = calculareArea(someOtherNumber);
const result4 = calculareArea(radius);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);