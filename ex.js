let obj={one:1,two:2};
let copy={...obj};
console.log(copy);
copy.two=3;
console.log(copy);
console.log(obj);