// Arrays

/*
    In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.
*/

// ways to define an array
var students = ['anuradha','kamal','hashan','malki', 'lakshi'];
var marks = new Array(40, 56, 67, 78, 58);

// print array
console.log(students);
console.log(students.length);
console.log(students[3]+' got '+marks[3]+' marks for maths');

// Array Mutation
students[3] = 'saduni';
students[5] = 'piyath';
students[students.length] = 'kumudu';
console.log(students)

// deferent data types in an array
var std1 = ['anuradha','kankanamge', 23 ,'student', 'embilipitiya', false]
console.log(std1)

// add elements
std1.push('green');
std1.unshift('Mr');
console.log(std1);

// remove elements
std1.pop();
std1.pop();
std1.shift();
console.log(std1);

// get index of an element
console.log(std1.indexOf(23));

var isAgriStudent = std1.indexOf('Agri') === -1 ? std1[0]+' is not a agri student ': std1[0]+' is a Agri student';

console.log(isAgriStudent)
