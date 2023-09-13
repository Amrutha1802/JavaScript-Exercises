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
y=x;
y.a='2';
console.log(x.a);//prints 2

// 4. Copy x = {'a':1} to a variable y without creating a reference to x
//Using spread operator
x={'a':1};
let y={...x};
console.log(y);
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
