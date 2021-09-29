//declare the variable
//assigns a value to a variable.
var i = 1;



//loops through  block of code 
//Checks if the value of left operand 
// is less than or equal to the value of right operand, 
// if yes then condition becomes true.
//statement1  Executed before the loop (the code block) starts.
//  Normally this statement is used to initialize a counter variable.
// To initiate multiple values, separate each value with a comma.
// statement2 Defines the condition for running the loop (the code block).
//  Normally this statement is used to evaluate the condition of the counter variable.
// If it returns true, the loop will start over again, if it returns false, the loop will end
// Executed each time after the loop (the code block) has been executed.
//  Normally this statement is used to increment or decrement the counter variable.

for (i = 1; i <= 100; i++) {
    //=IF(Something is True, then do something, otherwise do something else)
    if (i % 2 == 0) {
        console.log("even numbers are :" + i);
    }
}



for (i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log("odd numbers are :" + i);
    }
}