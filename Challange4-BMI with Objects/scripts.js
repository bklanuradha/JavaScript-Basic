// BMI With Objects

/*
    Let's remember the first coding challenge where Kasun and Chamal compared their BMIs. Let's now implement the same functionality with objects and methods.
    1. For each of them, create an object with full name, mass and height.
    2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
    3. In the end, display the highest BMI with the full name. Don't forget they might have the same BMI.
    BMI = mass / height ^ 2
*/

// declare objects
var kasun = new Object();
var chamal = new Object();

// add properties to kasun
kasun.fullName = prompt("Enter kasun's full name : ");
kasun.mass = prompt("Enter kasun's mass : ");
kasun.height = prompt("Enter kasun's height : ");

// add properties to chamal
chamal.fullName = prompt("Enter chamal's full name : ");
chamal.mass = prompt("Enter chamal's mass : ");
chamal.height = prompt("Enter chamal's height : ");

// add bmi() method for both
kasun.bmi = chamal.bmi = function(){
    this.bmiVal = this.mass / (this.height**2);
    return this.bmiVal;
}

console.log(kasun);
console.log(chamal);

// find the highest BMI
if(kasun.bmi() > chamal.bmi()){
    alert(kasun.fullName+" has the highest BMI"+kasun.bmiVal);
}
else if(kasun.bmi() > chamal.bmi()){
    alert(chamal.fullName+" has the highest BMI"+chamal.bmiVal);
}
else{
    alert("Both BMIs are equals");
}

console.log(kasun);
console.log(chamal);