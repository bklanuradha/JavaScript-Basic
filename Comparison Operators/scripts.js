// comparison operators

var a = 20;
var b = '20';
var c = 5;
var d = 15;

// Equal to
if( a == b){
    // equal value and equal type
    if( a == b){
        console.log('both value and type of a is equal to b')
    }
    //  not equal value or not equal type
    else if( a !== b){
        console.log('only value or type of a is equal to b')
    }
}

// greater than or equal
else if(a >= 10){
    // greater than
    if(a > 10){
        console.log('a is greater than 10');
    }
    //  equal to
    else if( a == 10){
        console.log('a is equal to 10');
    }
}

// not equal
else if(a != c){
    // less than
    if(a < c){
        console.log('a is less than c');
    }
    else{
        console.log('a is greater than c');
    }
}

else{
    // less than or equal to
    if(c <= d){
        // if(c  <= 5){
        //     console.log('c is less than or equal to 5');
        // }
        // else{
        //     console.log('c is greater than or equal to 5');
        // }

        // ternary operator
        c <= 5 ? console.log('c is less than or equal to 5') :
        console.log('c is greater than or equal to 5');
    }
}