// Loops

/*
    loops are control structure that repeatedly run a block of code until a certain condition get false.
*/

// without loops-----
console.log(1);
console.log(2);
console.log(3);

// For Loop
for(var i=0; i<10; i++){
    console.log(i)
}

/* 
i=0, 0<10 true, Log i to the console, i++
i=1, 0<10 true, Log i to the console, i++
----------
i=9, 0<10 true, Log i to the console, i++
i=10, 0<10 false, exit the loop
*/

for(var i=10; i>0; i--){
    console.log(i);
}

// irerate an array
var students = ['anuradha', 'hashan', 'malki', 'kavi', 'kasun'];
for(var i=0; i<students.length; i++ ){
    console.log(students[i])
}

// for/in loop
// The JavaScript for/in statement loops through the properties of an object
var person = {fname:"anuradha", lname:"Kankanamge", age:25};
var i;
for (i in person){
    console.log(person[i]);
}

// For/Of Loop
// For/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
var fullName = "anuradha Kankanamge";
var j;
for(j of fullName){
    console.log(j);
}

// while loop
var marks = [23,45,64,34,56];
var k = 0;
while(k < marks.length){
    console.log(marks[k]);
    k++;
}

// do-while loop
var l = 10;
do{
    console.log(l);
    l--;
}while(l >= 1);

// Continue & Break
// The break and the continue statements are the only JavaScript statements that can "jump out of" a code block.
var data = ['anuradha', 'embilipitiya', 1998, 'maths', true, 'cake'];

// Continue
// If a specified condition occurs, and continues with the next iteration in the loop.
for(var i = 0; i < data.length; i++){
    if(typeof(data[i]) !== 'string') continue;
    console.log(data[i]);
}

// Break
// Breaks the loop and continues executing the code after the loop (if any)
for(var i = 0; i < data.length; i++){
    if(typeof(data[i]) !== 'string') break;
    console.log(data[i]);
}