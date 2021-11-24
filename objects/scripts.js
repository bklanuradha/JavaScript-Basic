// Objects

/*
    In Javascript objects are variables that has many values.
    Those values written as name:value pairs called properties or methods.
*/

// object literals--
// Comma-separated list of name-value pairs wrapped in curly braces.

var anuradha = {
    firstName : 'Anuradha',
    lastName : 'kankanamge',
    age : 23,
    isMarried : false,
    job : 'Developer',
    subjects : ['python programming','web development','graphic design','database management'],
    degree : {
        name : 'Software Eng.',
        duration : '4 Years',
        credits : 120
    },
    projects: [
        {
            name : 'Ecommerce App',
            technology : 'flutter',
            version : 1.1
        },
        {
            name : 'Blog App',
            technology : 'React',
            version : 1.2
        },
        {
            name : 'POS',
            technology : 'C#',
            version : 2.0
        }
    ],
    yearOfBirth : function(year){
        return year-this.age;
    }
}

// get values
console.log(anuradha);
console.log(anuradha.firstName);
console.log(anuradha['lastName']);
var x = 'age';
console.log(anuradha[x]);
console.log(anuradha.subjects);
console.log(anuradha['subjects'][3]);
console.log(anuradha.degree.name);
console.log(anuradha['degree'].credits);
console.log(anuradha.projects[1].technology);
console.log('Year of birth : '+anuradha.yearOfBirth(2021));

// modify values
anuradha.job = 'Engineer';
anuradha.isMarried = true;
console.log(anuradha)

// new object syntax

var hashan = new Object();

// add properties
hashan.firstName ='hashan';
hashan.lastName = 'silva';
hashan['age'] = 29;
console.log(hashan);