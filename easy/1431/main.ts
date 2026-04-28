const  kidsWithCandies = (candies: number[], extraCandies: number): boolean[] => {
  let maxCandies = 0;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > maxCandies) {
      maxCandies = candies[i];
    }
  }

  const result: boolean[] = candies.map(candy => candy + extraCandies >= maxCandies);
  return result;
};
