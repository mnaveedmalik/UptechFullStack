let numbers = [1, 2, 3, 4, 5];

// 1. Find the sum of all numbers in the array (use reduce method) [2 marks]
console.log("Task 1");
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];

}
console.log(`The sum of the array [${numbers}] is : ${sum}`);

console.log("");


console.log("Task 2");
// 2. Add a new number to the end of the array [1 mark]
numbers.push(6);
console.log(`New Array after adding the a number at the end [${numbers}] `);

console.log("");

console.log("Task 3");
// 3. Remove the first number from the array [1 mark]

numbers.splice(0, 1); //(staringIndex, delete count)
console.log(`New arrary after removing the 1st number is : ${numbers}`);


console.log("");

console.log("Task 4");
// 4. Reverse the array [1 mark]
let reverse = [];
for (let j = numbers.length - 1; j >= 0; j--) {
    reverse.push(numbers[j]);

}
console.log(`The reverse array is: ${reverse}`);

console.log("");

console.log("Task 5");
// 5. Check if a specific number exists in the array [1 mark]


console.log(numbers.includes(8));//Retrun false  because 8 is not in list 

if (numbers.includes(4)) {
    console.log('Number exist')
}
else {
    console.log("Not Found")
}

console.log("");

console.log("Task 6");
// 6. Create a new array with each number multiplied by 2 using map() [1 mark]
let array2 = [1, 2, 3, 4, 5, 6, 7];

let double = array2.map((num) => {
    return num * 2;
});

console.log(double);


console.log("");

console.log("Task 7");
// 7. Use filter() to find all numbers greater than 3 [1 mark]
let filt = numbers.filter((n) => {
    return n > 3;
});
console.log(`Array greater than 3 number is: ${filt}`);



console.log("");

console.log("Task 8");

let firstDiv2 = num.find(n => n % 2 === 0);
console.log(`The first number divide by 2 is : ${firstDiv2}`);

