// variables

// primitive data Types
/* Number - Floating point numbers, for decimals and integers
   String - Sequence of characters, used for text
   Boolean - Logical data type that can only be true or false
   Undefined - Data type of a variable that does not have a value yet
   Null - Non-existent */

// You only can start a varible name with a letter, underscore or dollar sign.
// And can't use any reserved keywords as variable names

// create variables
var firtName = 'Anuradha';
var lastName = 'Kankanamge';
var age = 26;
var isOk = true;
var job,height;


// print only variable
console.log(firtName);
// print the variable with a string
console.log('my name is '+lastName);
// type coercion
console.log('my age is '+age);
console.log('It is '+isOk);
console.log('I am a '+job);

// get variable type
console.log(typeof(lastName));
console.log(typeof(age));
console.log(typeof(isOk));
console.log(typeof(job));

// define
job = 'doctor';
// variable mutation
lastName = 'kavindi';
console.log('I am '+lastName+ ' I am a '+job);

// Display Alert
alert('I am '+lastName +'. I am '+age+'years old and I am ok? '+isOk+'.');

// get user input
height = prompt('What is your height');
alert('my height is '+height+ ' feet.');

