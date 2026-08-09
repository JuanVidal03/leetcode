type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  if (nums.length === 0) return init;

  let valueToReturn: number = init;

  nums.forEach(value => {
    valueToReturn = fn(valueToReturn, value);
  });

  return valueToReturn;
};


const fn = function sum(accum: number, curr: number) { return accum + curr; }
reduce([1,2,3,4], fn, 0)
