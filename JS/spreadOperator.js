// 1.Copying an array
const originalArray = [1,2,3,4,5];
const copiedArray = [...originalArray];
console.log(originalArray);
console.log(copiedArray);

//2.Combining arrays
const array1 = [1,2,3];
const array2 = [4,5,6];
const combinedArray = [...array1, ...array2];
console.log(array1);
console.log(array2);
console.log(combinedArray);

//3.Creating arrays with additional elements
const baseArray = [1,2,3];
const arrayWithAdditionalElements = [...baseArray, 4, 5];
console.log(baseArray);
console.log(arrayWithAdditionalElements);

//4. Pass elements to functions
function sum(a,b,c){
    return a+b+c; 
}

const numbers = [1,2,3];
const result = sum(...numbers);
console.log(result);