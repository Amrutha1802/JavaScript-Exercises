// 1. Write a function which takes an object as input and print out its properties
function objProp(obj)
{
    for (let i in obj)
    {
        console.log(i+" : "+obj[i]);
    }
}
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
objProp(person);

// 2. How to delete property 'a' from object x={'a':1,'b':2}
//We can delete property 'a' from object using delete operator
let x={'a':1,'b':2};
delete x['a'];

// 3. Given x = {a:'1'}; y = x; does changing y.a change x.a? why? (looking for the answer - objects are pass by reference)
//Yes, changing y changes the x.a because in JavaScript objects are passed by reference,y points to same address as x, hence changing y also changes x,
//because they are essentially two references to the same object in memory as shown below
x={a:'1'};
let y1=x;
y1.a='2';
console.log(x.a);//prints 2

// 4. Copy x = {'a':1} to a variable y without creating a reference to x
//Using spread operator
x={'a':1};
let y={...x};
console.log(x);
// using Object.assign built in function
let z=Object.assign({},x);
console.log(z);

// 5. Write a function to check if two objects are equal
const obj1={one:1,two:2};
const obj2={one:1,two:2};
function checkEqualObjects(obj1,obj2)
{
   if(obj1===obj2)
   {
    console.log("Two objects are equal");
   }
   else{
    console.log("obj1 and obj2 are not equal");
    }
}

//Classes

// 1. Implement Queue using javascript class. It should have the below methods
//     * enqueue
//     * dequeue
//     * front
//     * isEmpty
class Queue extends Array {
    enqueue(e) {
        super.push(e);
    }
    dequeue() {
        return super.shift();
    }
    peek() {
        return !this.empty() ? this[0] : undefined;
    }
    empty() {
        return this.length === 0;
    }
}

var customers = new Queue();
customers.enqueue('one');
customers.enqueue('two');
customers.enqueue('three');
customers.dequeue();
console.log(customers.peek());
console.log(customers.empty());

// 2. Explain instanceOf operator with an example.
//instanceOf operator is used to check whether an object is an instance of that type
class Person{
    constructor(name)
    {
    this.name = name;
    }
}

let p1 = new Person('Amrutha');
console.log(p1 instanceof Person); // true

//Hackerrank exercise on callback
//Solve https://www.hackerrank.com/contests/javascript-week2/challenges/js-callbacks
function myFilter(my_array, callback){
//Enter your code here
let arr=[];
for(let i in my_array)
    {
        if(callback(my_array[i]))
            {
                arr.push(my_array[i]);
            }
    }
return arr;
}

function processData(inputArray) {
    //In blank write anonymous function, which takes one parameter and returns true if its even or false if its odd.
    console.log(myFilter(inputArray,function (ele){return ele%2==0?true:false}));   
} 
