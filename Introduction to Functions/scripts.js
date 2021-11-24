// Inroduction of Function

// Function is a re-usable peace of code that does a specific thing

// -Define Function-

// without return
function addNumbers(num1, num2){
    var ans = num1 + num2;
    console.log("Addition : "+ans);
}

// with return
function subNumbers(num1,num2){
    // return the value to where we called the function
    // exit the function
    return num1-num2;
}

// calling function
addNumbers(30,52);

var sub = subNumbers(30,12);
console.log("Substraction : "+sub);

// -------------------

// define
function calculate(birthYear){
    return 2021 - birthYear;
}
// calling
console.log("kasun is "+calculate(1998)+" years old");
console.log("Anuradha is "+calculate(1997)+" years old");

//define
function retiringYear(firstName, birthYear){
    // calling
    var age = calculate(birthYear);
    var retire = 60 - age;
    console.log(firstName+" retire in "+retire+" years, in"+(birthYear+age+retire));
} 
// calling
retiringYear("Anu",1990)