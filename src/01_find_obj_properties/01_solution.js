// Code your solution here
//Part 1 - findObjPropsHasOwn
function findObjPropsHasOwn(obj) {
  const keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys.join(', ');
}

// Part 2 - findObjKeys
function findObjKeys(obj) {
  const keys = Object.keys(obj);
  return keys.join(', ');
}

const calculatorPrototype = {
  add: function (a, b) {
    return a + b;
  },
};

const calculator = function () {
  const calculatorInstance = Object.create(calculatorPrototype);
  calculatorInstance.total = 0;
  return calculatorInstance;
};

const myCalculator = calculator();

console.log(findObjPropsHasOwn(myCalculator));

console.log(findObjKeys(myCalculator));
