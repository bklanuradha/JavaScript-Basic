// Function Expressions

// Function Declaration----
// function profession(job, firstName){}

// function expression----
var prefession = function(job, firstName){
    switch(job){
        case 'doctor':
            return firstName+' is treating patients.';
        case 'teacher':
            return firstName+' is teaching students.';
        case 'engineer':
            return firstName+' is working with buildings.';
        default:
            return firstName+' is doing something else.';
    }
}
// calling
console.log(prefession('doctor','anuradha'));
console.log(prefession('teacher','kasun'));
console.log(prefession('engineer','hashan'));
console.log(prefession('nurse','malki'));