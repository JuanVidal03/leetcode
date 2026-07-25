type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

const createCounter = (init: number): Counter => {
  const initialValue = init;

  const increment = (): number => ++init;
  const decrement = (): number => --init;
  const reset = (): number => init = initialValue;

  return {
    increment,
    decrement,
    reset,
  }
};

const counter = createCounter(5)

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
