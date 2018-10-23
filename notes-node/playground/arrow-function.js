let square = (x) => {
  let result = x*x;
  return result;
};

let squareShort = x => x * x;

console.log(square(9));
console.log(squareShort(7));

let user = {
  name: 'Taddes',
  // ARROW FN Will not bind to this
  sayHi: () => {
    console.log({arguments})
    console.log(`Hi ${this.name}`)
  },
  //Supported object literal
  sayHiAlt () {
    console.log({arguments})
    console.log(`Hi ${this.name}`)
  }
};
user.sayHi(3,4,5)
user.sayHiAlt(1,2,3);