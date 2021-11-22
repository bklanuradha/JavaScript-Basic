// Arithmetic Operators

// single operators
var myAge, yourAge, year, result;
myAge = 26;
yourAge = 20;
year = 2021;


// substarction
result = year - myAge;
console.log('I was born in '+result);

// Addition
result = year + myAge;
console.log('After 10 years, It will be '+result);

// Multiplication
result = year * myAge;
console.log('Product of our ages '+result);

// Division
console.log('Division of our ages '+(myAge/yourAge));

// Modulus
console.log('Modulus of our ages '+(myAge%yourAge));

// Exponentiation
console.log('Exponent of our ages '+(myAge**2));

// increment
console.log(myAge++);
console.log('Post increment of my age '+myAge);

console.log(++myAge);
console.log('Pre increment of my age '+myAge);

// decrement
console.log(myAge--);
console.log('Post decrement of my age '+myAge);

console.log(--myAge);
console.log('Pre decrement of my age '+myAge);

// operator Precedence
var cal = ((20+30)/10+4.5-2*4**2);
console.log(cal);

// multiple operators
var ans1, ans2;
ans1 = ans2 = (((30+40-29)*2)/8)**4;
console.log(ans1+ '|'+ans2);
