const createCounter = (n: number): () => number => {
  return () => {
    return n++;
  }
};

const conunter = createCounter(10);
conunter()
conunter()
