//find()
const multipleOf5 = [5,10,15,20];

const firstNumberGreaterThan10 = multipleOf5.find(number => number >10);
console.log(firstNumberGreaterThan10);

//findIndex()
const randomNumber = [6,14,27,56,40];
const indexNumber = randomNumber.findIndex(number => number > 50);
console.log(indexNumber);