/* 1. Switch Statement 
 Write a function that takes a day number (1-7) as input and returns the name of the day. Use 
 a switch statement to return the correct day name based on the input. */

console.log("Task 1");
function dayName(dayNo) {
    switch (dayNo) {
        case 1:
            return 'Monday'
            break;
        case 2:
            return 'Tuesday'
            break;
        case 3:
            return 'Wednesday'
            break;
        case 4:
            return 'Thursday'
            break;
        case 5:
            return 'Friday'
            break;
        case 6:
            return 'Saturday'
            break;             //we can also ignore/skip  break in this scenerio
        case 7:
            return 'Sunday'
            break;

        default:
            return 'invalide input number'

    }
}
// let day = 4
// console.log(`The day on ${day} is ${dayName(day)}`);

console.log(`The day is ${dayName(5)}`);

console.log("");

console.log("Task 2");

// 2. Write a function that prints numbers from 1 to 10 using a while loop. 

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log("");

console.log("Task 3");

// Write a function that prints numbers from 10 to 1 using a do while loop. 

let j = 10;

do {
    console.log(j);
    j--;
} while (j >= 1);


console.log("");


