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


// 1. Briefly explain different Promise states.
// Promises can have three different states:
// Pending: When a promise is initially created, it is in a pending state. This means that the asynchronous operation associated with the promise has not yet completed or failed. 
// Fulfilled: When the asynchronous operation t represents is successfully completed. This typically means that the desired result or value is now available, and the promise can deliver this value to any registered .then() handlers.
// Rejected: If an error occurs during the execution of the asynchronous operation, the promise transitions to the rejected state. In this state, the promise contains information about the error, and it can pass this error to any registered .catch() or .then() handlers with an error callback.
// 2. Using promise to create a delayedLowerCase function which will transform a string to lower case after 5 seconds. Ex Input: ""BEAUTIFUL CODE"" Output: ""beautiful code""
const my_promise=function delayedLowerCase(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof input === 'string') {
        input=input.toLowerCase();
        console.log(input);
        resolve(input.toLowerCase());
      } else {
        reject(new Error('Input is not a string'));
      }
    }, 5000); 
  });
}
my_promise("BEAUTIFUL CODE");

// 3. Briefly explain Promise Chaining. For the above created delayedLowerCase function chain a promise which will print the string and its length: Ex: Input: ""Beautiful Code""  Output: ""beautiful code - 14"""
//Promise chaining is a technique in JavaScript that allows you to sequentially execute multiple asynchronous operations, one after the other, using promises. It involves using the .then() method to attach additional actions to a promise's resolution, effectively creating a chain of asynchronous tasks.
const my_promise2=function delayedLowerCase(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof input === 'string') {
        input=input.toLowerCase();
        //console.log(input);
        resolve(input.toLowerCase());
      } else {
        reject(new Error('Input is not a string'));
      }
    }, 5000); 
  });
}
my_promise2("BEAUTIFUL CODE")
  .then(result => {
    new Promise((resolve,reject)=>{
      setTimeout(()=>{console.log(result+'-'+result.length)},1000);
    });
  })
  .catch(error => {
    console.error(error);
  });

// 1. Rewrite the below using Async-Await syntax
// function getProcessedData(url) {
//   return downloadData(url) // returns a promise
//     .catch(e => {
//       return downloadFallbackData(url)  // returns a promise
//     })
//     .then(v => {
//       return processDataInWorker(v)  // returns a promise
//     })
// }
async function getProcessedData(url) {
try {
    data = await downloadData(url);
  } catch (e) {
    data = await downloadFallbackData(url);
  }
  return processDataInWorker(data);
}

async function getProcessedData(url) {
  try {
      await downloadData(url) // returns a promise
      await processDataInWorker(v)  // returns a promise
  } 
  catch(e) {
      return downloadFallbackData(url)
  }
}


//function to display lowercase of a string
function delayedLowerCase(input)
{
  setTimeout(()=>{
    console.log(input.toLowerCase());
  },5000);
}
delayedLowerCase('BEAUTIFUL CODE');

//using callback
function lowercase(input)
{
  console.log(input.toLowerCase());
}
function delayedLowerCase(input,callback)
{
  setTimeout(()=>callback(input),5000);
}
delayedLowerCase('BEAUTIFUL CODE',lowercase);

//using promises
function delayedLowerCase(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof input === 'string') {
        console.log(input.toLowerCase())
        resolve(input);
      } else {
        reject(new Error('Input is not a string'));
      }
    }, 5000); 
  });
}

// Calling the function
delayedLowerCase("BEAUTIFUL CODE");

//using async and await
function toLowerCase(input) {
  return input.toLowerCase();
}
async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function delayedLowerCase(input) {
  await wait(5000); // Wait for 5 seconds
  const result = toLowerCase(input);
  console.log(result);
}
// Calling the function
delayedLowerCase('BEAUTIFUL CODE');


//Process Data function using callbacks,Promises and async-await
//ProcessingData function for fetching , transforming and processing the data
function fetchData() {
    console.log('In fetchData function')
    return "Hello, ";
  }
  
  function transformData(data) {
    console.log("In transformData function")
    return data + "World!";
  }
  
  function processData() {
    console.log("Performing processData function")
    const data = fetchData();
    const result = transformData(data);
    return result;
  }
  
  const result = processData();
  console.log(result); // "Hello, World!"

  //Process Data function using Callbacks

  function fetchData(callback) {
    setTimeout(() => {
      console.log('In fetchData function');
      const data = "Hello, ";
      callback(data);
    }, 1000);
  }
  
  function transformData(data, callback) {
    setTimeout(() => {
      console.log("In transformData function");
      const result = data + "World!";
      callback(result);
    }, 1000);
  }
  
  function processData(callback) {
    console.log("Performing processData function");
    fetchData(data => {
      transformData(data, result => {
        callback(result);
      });
    });
  }
  
  processData(result => {
    console.log(result); 
  });
  
  //Process Data function using Promises
  function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('In fetchData function');
        const data = "Hello, ";
        resolve(data);
      }, 1000);
    });
  }
  
  function transformData(data) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("In transformData function");
        const result = data + "World!";
        resolve(result);
      }, 1000);
    });
  }
  
  function processData() {
    console.log("Performing processData function");
    return fetchData()
      .then(data => transformData(data))
      .then(result => result);
  }
  
  processData().then(result => {
    console.log(result); 
  });
  
  //using await and async functions
  async function fetchData() {
    console.log('In fetchData function');
    return new Promise(resolve => {
      setTimeout(() => {
        const data = "Hello, ";
        resolve(data);
      }, 1000);
    });
  }
  
  async function transformData(data) {
    console.log("In transformData function");
    return new Promise(resolve => {
      setTimeout(() => {
        const result = data + "World!";
        resolve(result);
      }, 1000);
    });
  }
  
  async function processData() {
    console.log("Performing processData function");
    const data = await fetchData();
    const result = await transformData(data);
    return result;
  }
  
  processData().then(result => {
    console.log(result); 
  });


  
  