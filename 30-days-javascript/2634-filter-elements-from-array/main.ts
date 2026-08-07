type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {

  const result: number[] = [];

  arr.forEach((value, index) => {
    const fnResult = fn(value, index);
    if (fnResult) result.push(value);
  })

  return result;
};
