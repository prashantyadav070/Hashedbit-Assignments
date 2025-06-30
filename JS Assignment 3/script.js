// Q1) Create an array of states in India. Remove all names starting with vowels using array.filter.
let states = ["Uttar Pradesh", "Andhra Pradesh", "Odisha", "Bihar", "Maharashtra", "Assam", "Karnataka"];
let filteredStates = states.filter(state => !"AEIOUaeiou".includes(state[0]));
console.log(filteredStates);


// Q2) Reverse the words in the string 'I love my India'
let str = 'I love my India';
let reversed = str.split(' ').reverse().join(' ');
console.log(reversed);



// Q3) Replace 'INDIA' with 'INDONESIA' using array.splice
let stringArr = ['I', 'N', 'D', 'I', 'A'];
stringArr.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
let newStr = stringArr.join('');
console.log(newStr);



// Q4) Count number of vowels and consonants in a string
let sample = "Javascript is very powerful!";
let vowels = 'aeiouAEIOU';
let vowelCount = 0, consonantCount = 0;

for (let char of sample) {
    if (/[a-zA-Z]/.test(char)) {
        if (vowels.includes(char)) vowelCount++;
        else consonantCount++;
    }
}
console.log(`Vowels: ${vowelCount}, Consonants: ${consonantCount}`);




// Q5) Replace wrong word with correct word in any sentence
function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}
console.log(correctfn("I have a pen. It's red pen.", "pen", "marker"));



// Q6) Return numbers greater than 5 using array.filter
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let greaterThanFive = inputArr.filter(num => num > 5);
console.log(greaterThanFive);




// Q7) Calculate average scores of students using array.map and array.reduce
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

let result = students.map(std => {
    let total = std.scores.reduce((a, b) => a + b, 0);
    let avg = total / std.scores.length;
    return { name: std.name, average: avg };
});
console.log(result);


// Q8) Repeated sum of digits until single digit remains
function repeatedSum(num) {
    while (num > 9) {
        num = num.toString().split('').reduce((a, b) => a + Number(b), 0);
    }
    return num;
}
console.log(repeatedSum(456)); // Output: 6




// Q9) Count number of words in a paragraph
function wordCount(para) {
    return para.trim().split(/\s+/).length;
}
console.log(wordCount("This is a simple paragraph to count words."));



// Q10) Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello")); // Output: olleH



// Q11) Calculate average marks from object for each student
let marks = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

let avgResult = {};
for (let student in marks) {
    let subjects = Object.values(marks[student]);
    let avg = subjects.reduce((a, b) => a + b, 0) / subjects.length;
    avgResult[student] = { average: avg };
}
console.log(avgResult);
