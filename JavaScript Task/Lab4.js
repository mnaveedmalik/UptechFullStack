const users = [
    { name: "Alice", courses: ["Math", "Science", "English"] },
    { name: "Bob", courses: ["Math", "Art"] },
    { name: "Charlie", courses: ["Science", "Math", "History"] },
    { name: "David", courses: ["Math", "English"] },
    { name: "Eve", courses: ["Art", "Science"] }
];


console.log("Task 1");
// Count how many users are enrolled in each course using only for loops.


let courseCount = {};

for (let i = 0; i < users.length; i++) {

    let cour = users[i].courses;

    for (let j = 0; j < cour.length; j++) {

        let courseName = cour[j];

        if (courseCount[courseName]) {
            courseCount[courseName]++;
        } else {
            courseCount[courseName] = 1;
        }
    }
}

console.log(courseCount);
console.log("");
console.log("Task 2");
// Display each course with the number of students enrolled.


for (let course in courseCount) {
    console.log(course + " has " + courseCount[course] + " students");
}




console.log("");
console.log("Task 3");

// Print the most popular course with the highest number of students.
let max = 0;
let popularCourse = "";

for (let course in courseCount) {

    if (courseCount[course] > max) {
        max = courseCount[course];
        popularCourse = course;
    }
}

console.log("Most Popular Course: " + popularCourse);
console.log("Total Students: " + max);