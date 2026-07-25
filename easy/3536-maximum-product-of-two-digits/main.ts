function maxProduct(n: number): number {
  const splitedNumbers = n.toString().split("").map(Number);
  let max1 = 0;
  let max2 = 0;

  splitedNumbers.forEach(currentNumber => {

    if (currentNumber >= max1) {
      max2 = max1;
      max1 = currentNumber;
    } else if (currentNumber > max2) {
      max2 = currentNumber;
    }
  })

  return max1 * max2
};