let str= "Office politics is not good for the company the company management should take care of it";
console.log(str.charAt(5));
console.log(str.charCodeAt(5));
console.log(str[5]);
console.log(`length of string is ${str.length}`);

console.log(x);
var x=10;
console.log(x);
const number=[1,2,3];
console.log(Math.max(...number));
const greet=()=>{
    console.log("Good Morning");
}
greet();
const numbers = [1, 2, 3, 4, 5];
// Find the first even number
const firstEven = numbers.find(number => number % 2 === 0); // Output: 2
// Filter all even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0); // Output: [2, 4]
console.log(firstEven);
console.log(evenNumbers);

const lastNumber = numbers.pop(); // Removes and returns 4
console.log(numbers); // Output: [1, 2, 3]
console.log(lastNumber); // Output: 4
const firstNumber = numbers.shift(); // Removes and returns 1
console.log(numbers); // Output: [2, 3]
console.log(firstNumber); // Output: 1

const doubleNumber= numbers.map(number=>number*2);
console.log(doubleNumber);

function greets(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
   }
   function sayGoodbye() {
    console.log("Goodbye!");
   }
   greets("John", sayGoodbye);
   const poem = `
        The woods are lovely, dark and deep,
        But I have promises to keep,
        And miles to go before I sleep,
        And miles to go before I sleep.
`;

console.log(poem);