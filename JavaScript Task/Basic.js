// let can be reassigned but not redclared
let age = 45;
age = 67;
console.log(age);
console.log("");

//  int age=455; it will give error





// var  can be reassigned and also redclared 
var name = "naveed";
var name = "diini";
console.log(name);
console.log("");



// const cannot be redclraed and reassigned 
const fellow = 45;
console.log("");
//    const fellow=67; Error 




var n = "naveed";
console.log(typeof n);
console.log("");


var j = 34;
console.log(typeof j);
console.log("");


var bool = false;
console.log(typeof bool);
console.log("");

var h;
console.log(typeof h);
console.log("");

var u = null;
console.log(typeof u);
console.log("");





//Objects

let student = [{
    name: "naveed",
    age: 22,

    //Create another object within an object
    course: [{
        subject: "CS",
        creditHours: 63,

    },
    {
        department: "na",
    }
    ],
    greet: function () {
        return "Naveed is good guy";
    }
},


{
    name: "zaheer",
    age: 34,
},]



// It will print all the  key values in the object

console.log("That is our  object part ");
console.log("");

//using the  for each loop method  
student.forEach(function (ele) {
    console.log(ele);
});

console.log("");

//it will print just the static name .... we use  . for static values 
console.log(student[0].name);

console.log("");

//we will use this method for the dynamic values  [""]
// console.log(student[0]["course"].subject);

//targetting the specific property of the course 
console.log(student[0]["course"][0].creditHours);

console.log("");



//Conditions

//if and if else condition 

let marks = 100;
if (marks > 90 && marks <= 100) {
    if (marks == 100) {
        console.log("He is very much briliant student")
    }
    console.log("Congrats You got the grade A ");

}

else if (marks > 80) {
    console.log("Grade B ");
}

else if (marks > 70) {
    console.log("Grade C ");
}
else {
    console.log("Better luck next time");
}

console.log("");

//  Switch statement 
let choice = "english";
switch (choice) {
    case 1:
        console.log("You choose Math ");
        break;

    case 2:
        console.log("You choose urdu ");
        break;
    default:
        console.log("You choose nothing ");
}

console.log("");

//Statements 

//for loop 

for (let i = 0; i < 5; i++) {
    //use of break statemets 
    if (i == 3) {
        break;
    }
    console.log(i);
}
console.log("");

//While loop
let m = 0;

while (m <= 10) {
    if (m == 5) {
        m++;          // increment pehle
        continue;     // phir skip
    }

    console.log(m);
    m++;
}

console.log("");


// Do while loop

console.log("This is related to the do while loop");

let l = 0;
do {
    console.log("Naveed");
    l++;
}
while (l < 5);

console.log("");

// //map
console.log("This task is related to the map");
let array = ["naveed", "zaheer", "haseeb"];
console.log(array[0]);
console.log(array);

//Through for loop 
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// Through map
console.log("The task about the map");
array.map((name, index) => {

    console.log(index, name);
});

console.log("");

console.log("Task related to functions");
//Arrow function
const hello = () => {
    return "This is an arrow  function";
};

hello();


//shift
console.log("That is related to shift")
let array1 = ["a", "b", "c"];
let result1 = array1.shift();
console.log(result1);

//unshift
console.log("That is related to unshift")
let array2 = ["a", "b", "c"];
let result2 = array1.unshift("z");
console.log(result2);


//slice
console.log("That is related to slice that remove the first element")
let array3 = ["a", "b", "c", "e", "f"];
let result3 = array1.slice(1, 3);
console.log(result3);

//splice
console.log("That is related to splice that add and remove the elemet")
let array4 = ["a", "b", "c"];
let result4 = array1.splice(1, 0, "naveed");// if we want to delete thne we add 1 ,2 or anything in place of 0
console.log(result4);

//related to reduce 
let numbers = [10, 20, 30];

let total = numbers.reduce(function (acc, curr) {
    return acc + curr;   // add current value
}, 0);   // 0 is starting value

console.log(total);  // 60


//related to destructing 

let arr = [10, 20, 30];

let [a, b, c] = arr;

console.log(a); // 10
console.log(b); // 20

// related to the spread operator 
let arr1 = [1, 2, 3];

let arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]



console.log("");
let l1 = [1, 2];
let l2 = [3, 4];

let merge = [...l1, ...l2];

console.log(c); // [1,2,3,4]






//Practice Excercise 

console.log("Practice exercise");
// ask 1: Largest of Three Numbers 
// Create three numbers and print the largest. 

console.log("Task 1");

let a1 = 6;
let b1 = 516;
let c1 = 956;

if (a1 == b1 && b1 == c1) {
    console.log("Three numbers are equal");
}
else if (a1 >= b1 && a1 >= c1) {
    console.log(`${a1} is the largest number`);
}
else if (b1 >= a1 && b1 >= c1) {
    console.log(`${b1} is the largest number`);
}
else {
    console.log(`${c1} is the largest number`);
}


console.log("");
console.log("Task 2");
// Task 2: Positive, Negative or Zero 
// Check a number and print: 
// • Positive 
// • Negative 
// • Zero

let a2 = 0;

if (a2 > 0) {
    console.log(`${a2} is a positive number.`);
}
else if (a2 < 0) {
    console.log(`${a2} is a negative number.`);

}
else {
    console.log(`${a2} is a  zero  number.`);
}


console.log("");
console.log("Task 3");
// Task 3: Simple Login System 
// Create: 
// let correctUsername = "admin"; 
// let correctPassword = "1234"; 
// Check: 
// • If both correct → "Login Successful" 
// • Else → "Invalid Credentials"


let correctUsername = "admin";
let correctPassword = "124";

if (correctUsername === "admin" && correctPassword === "1234") {
    console.log("Login Successfull");
}
else {
    console.log("invalid credentials");
}


console.log("");

console.log("Task 4");
// Electricity Bill 
// Units consumed: 
// • 0–100 → 10 per unit 
// • 101–200 → 15 per unit 
// • 200+ → 20 per unit 
// Calculate total bill. 

let totalBill;
let unitConsumed = 102;

if (unitConsumed >= 0 || unitConsumed <= 100) {
    totalBill = unitConsumed * 10;
    console.log(`Your total bill of ${unitConsumed} unit is ${totalBill}`);
}
else if (unitConsumed >= 101 || unitConsumed <= 200) {
    totalBill = unitConsumed * 15;
    console.log(`Your total bill of ${unitConsumed} unit is ${totalBill}`);
}

else if (unitConsumed > 200) {
    totalBill = unitConsumed * 20;
    console.log(`Your total bill of ${unitConsumed} unit is ${totalBill}`);
}

console.log("");
console.log("Task 5");
// Task 4: Print Even Numbers 1–50 

for (let i = 0; i < 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("");
console.log("Task 6");
// Task 5: Reverse Counting 
// Print numbers from 20 to 1. 

for (let i = 20; i >= 1; i--) {
    console.log(i);
}

console.log("");
console.log("Task 7");
// Task 6: Factorial Calculator 
// Find factorial of a number. 
// Example: 
// 5! = 5 × 4 × 3 × 2 × 1

let fact = 1;
let num = 5;
for (let i = num; i >= 1; i--) {
    fact = fact * i;
}
console.log(`The factorial of the ${num} is ${fact}`);

console.log("");
console.log("Task 8");

// Count Digits 
// Take a number like: 
// 12345 
// Count how many digits it has. 

let num1 = 12345;
let totalDigit = num1.toString().length;
console.log(`Total digit in ${num1} is ${totalDigit}`);

console.log("");
console.log("Task 9");

// Task 8: Sum of Even Numbers (1–100) 
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
}
console.log(`The sum of the number(1-100) is ${sum}`);

console.log("");
console.log("Task 9");
//Task related to prime number 
let num11 = 21;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
}
else {
    for (let i = 2; i < num; i++) {
        if (num11 % i === 0) {
            isPrime = false;
            break;
        }
    }
}


if (isPrime) {
    console.log(`${num11} is a prime number`);
} else {
    console.log(`${num11} is not a prime number`);
}


console.log("");

console.log("Task 10");
let balance = 5000;
let amount = 2000;

if (amount <= balance) {
    balance -= amount;
    console.log(`Transaction successful. Remaining balance: ${balance}`);
} else {
    console.log("Insufficient balance");
}


console.log("");
console.log("Task 11");
let password = "Abc12345";

// Conditions
let hasNumber = /[0-9]/.test(password);
let hasUppercase = /[A-Z]/.test(password);
let hasLength = password.length >= 8;

if (hasNumber && hasUppercase && hasLength) {
    console.log("Password is strong");
} else {
    console.log("Password is weak");
}


console.log("");
console.log("Task 12");
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
