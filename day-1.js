//Day 1 Exercises

//1. Write a condition that returns true for == but not === and explain why

if(10=='10')
{
    return true;
}
else 
{
    return false;
}
if(10==='10')
{
    return true;
}
else
{
    return false;
}
//'==' returns true if value of both operands are equal irrespective of their type, and '===' return true if both value and type of operands are equal

//2. Write a single if condition that returns true if x is greater than or equal to 10 and is even, or if x is less than 10 and is odd

if((x>=10 && x%2==0) || (x<10 && x%2!=0))
{
    return true;
}

//3. Use a ternary operator to assign 'odd' or 'even' to a variable called 'output' by checking if a variable 'x' is odd or even

let x=8;
const output=(x%2!=0)?'odd':'even';

//4. Using if/else if/else write a program that takes an input x (1-7) and prints corresponding weekday (1-Sunday etc).  If input is invalid print invalid input.

if(x==1)
{
    console.log('Sunday');
}
else if(x==2)
{
    console.log('Monday');
}
else if(x==3)
{
    console.log('Tuesday');
}
else if(x==4)
{
    console.log('Wednesday');
}
else if(x==5)
{
    console.log('Thursday');
}
else if(x==6)
{
    console.log('Friday');
}
else if(x==7)
{
    console.log('Saturday');
}
else
{
    console.log('invalid input');
}

//5. Solve question 4 using switch case"

x=5;
switch(x)
{
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('invalid input');
        break;
}

// 1. What is difference between Function Declaration and Function Expression?
//A function declaration must have a function name whereas A function expression is similar to a function declaration without the function name.
//Function declaration does not require a variable assignment whereas Function expressions can be stored in a variable assignment.
//Function declarations are hoisted whereas function expressions are not hoisted.

// 2. Write down the syntax rules of an Arrow function.
// If the function takes zero/multiple parameters, you should use parentheses ().
// If the function takes a single parameter, you can omit the parentheses around the parameter name,if the parameter has a default value then parantheses is required.
// If the function body consists of a single expression, you can omit the curly braces {} and the return keyword.
// If the function body requires multiple statements, you should enclose them in curly braces {} and use the return keyword if you want to return a value.

// 3. Using Function Declaration create a function which will add two numbers.
function add(a,b)
{
    return a+b;
}
console.log(add(2,3));

// 4. Using Function Expression create a function which will multiply two numbers.
function multiply(a,b)
{
    return a*b;
}
console.log(3,4);

// 5. Using Arrow Function create a function to subtract two numbers.
const sub=(a,b)=>{
    return a-b;
}

console.log(sub(4,5));

// 6. Create IIFE which will accept a string as argument and return the reversed string."
(function (str) 
{
    const reversedString = str.split('').reverse();
    return reversedString.join('');
})('amrutha');