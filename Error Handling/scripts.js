// Error Handling

// --Try Catch--
/*
    try - Let you test a block of code for errors
    catch - Lets you handle the error
    throw -  lets you create custom errors
    finally - lets you execute code, after try and catch, regardless of the result
*/

// function to find the largest number
function findLargest(a,b,c){
    try{
        if(typeof(a) !== 'number' || typeof(b) !== 'number' ||
        typeof(c) !== 'number'){
            throw "Error: enter only numbers!";
        }
        else if ( a == b || a == c || b == c){
            throw "Error: Enter deferent numbers!";
        }
        else{
            if(a > b && b > c){
                console.log(" a is the largest number!")
            }
            else if(b > a && b > c){
                console.log("b is the largest number!");
            }
            else if(c > a && c > b){
                console.log("c is the largest number!");
            }
            else{
                console.log("Invalid inputs!");
            }

        }
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("Input values are "+a+", "+b+" and"+c);
    }
}

// calling
findLargest(3,4,4)