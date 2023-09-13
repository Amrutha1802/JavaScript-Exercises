//Exercise - Guess the output
//For each of the following, try to work out what the output will be. Run the code in the browser console to check your answer.
var a = 12;
(function() {
  console.log(a);//output : 12
})();

var a = 5;
(function() {
  var a = 12;
  console.log(a);//output :12
})();

var a = 10;
var x = (function() {
  var a = 12;
  return (function() {
    console.log(a);// output : 12
  });
})();
x();

var a = 10;
var x = (function() {
  var y = function() {
    var a = 12;
  };
  return function() {
    console.log(a);
  }
})();
x();//output : 12

var a = 10;
var x = (function() {
  (function() {
    a = 12; // <<< look carefully at this line.
  })();
  return (function() {
    console.log(a);// output : 12
  });
})();
x();

var a = 10;
(function() {
  var a = 15;
  window.x = function() {
    console.log(a);//output :15
  }
})();
x();

// 1. Is array passed by value or reference to a function. Justify your answer with an example.

//In JavaScript, arrays are passed by reference to a function,as in the below example
function myFunction(arr)
{
    arr[2]='four';
}
const arr=['one','two','three'];
console.log(arr);//shows output : ['one','two','three']
myFunction(arr);
console.log(arr);//shows outpur : ['one','two','four']

// 2. Write a Javascript function to clone an array without using loops.

function clone(arr)
{
    return arr;
}
const arr1=[1,2,3,4,5];
const cloneArr=clone(arr1);
console.log(cloneArr);

//using slice method
function clone1(arr)
{
  return arr.slice();
}
const ar=[1,2,3,4,5];
const cloneAr1=clone1(ar);
console.log(cloneAr1);

//using spread operator
function clone1(arr)
{
  return [...arr];
}
const ar1=[1,2,3,4,5];
const cloneAr2=clone1(ar1);
console.log(cloneAr2);

// 3. Breifly explain the below Array methods with examples
// shift, unshift, slice, splice, pop
//shift method is used to remove the first element of an array and returns the removed elements
const numbers = ["one", "two", "three", "four"];
const removedElement=fruits.shift();
console.log(numbers);
//unshift method is used to add new elements to beginning of an array
const nums=[3,4,5];
nums.unshift(1,2);
console.log(nums);
//slice is used to return selected elements in an array as a new array,it takes parameters start and end(exclusive) , both are optional, 
//default start is 0 , default end is last element
const array2=[9,8,7,6,5];
const slicedArray=array2.slice(2,5);
console.log(slicedArray); //[7, 6, 5]
//splice is used to add/remove array elements
//It takes 3 arguments , startIndex,deletecount,items which are to be added
//startIndex is index from which operation is to be performed
//deletecount is number of elements to be removed from startIndex
//items are the items which are to be added from startIndex
const array3=['one','two','three','four','five'];
array3.splice(2,1,'six','seven');
console.log(array3);//['one', 'two', 'six', 'seven', 'four', 'five']

//pop is used to remove element from the end of an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

// 1. Using a for loop output the elements in reverse order [1,2,3,4,5]
const array=[1,2,3,4,5];
for(let i=array.length-1;i>=0;i--)
{
    console.log(array[i]);
}

// 2. Whats the difference between for .. of and for .. in
//for..of and for ..in are loops used for iteration
//for..of is primarily used for iterating over values of iterable objects such as arrays,strings,maps,etc
//for..in loop is used for iterating over properties of an object

// 1. Use map function to return the squares of the items in the below array [2, 4, 6, 8, 10].
const input=[2,4,6,8,10];
const output=input.map(inp=>{
    return inp*inp;
})
console.log(output)// [4, 16, 36, 64, 100]

// 2. Use filter function array to extract strings from the below array  [1, ""two"", 3, ""four"", 5, ""Six"", 7, ""Eight"", 9, ""Ten""].
const input1=[1, "two", 3, "four", 5, "Six", 7, "Eight", 9, "Ten"];
const output1=input1.filter(inp1=>{
    return typeof inp1 ==='string'
});
console.log(output1);//['two', 'four', 'Six', 'Eight', 'Ten']

// 3. What are arguments of the reduce function. Use reduce function to return the sum of the items in the array [1, 3, 5, 7, 9].
//reduce function takes two arguements one is call back function and an optional initial value
const nmbrs=[1,3,5,7,9];
const total_sum=nmbrs.reduce((accumulator,curr_val)=>{
    return accumulator+curr_val;
},0);
console.log(total_sum);//25
