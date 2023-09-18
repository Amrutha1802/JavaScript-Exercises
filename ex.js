 function delayedLowerCase(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof input === 'string') {
        resolve(input.toLowerCase());
      } else {
        reject(new Error('Input is not a string'));
      }
    }, 5000); 
  });
}
//  Calling the function
delayedLowerCase("BEAUTIFUL CODE")
  .then(result => {
    console.log(result); 
  })
  .catch(error => {
    console.error(error);
  });

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
  await wait(5000); // Wait for 10 seconds
  const result = toLowerCase(input);
  console.log(result);
}
// Calling the function
delayedLowerCase('BeautifulCODE');
