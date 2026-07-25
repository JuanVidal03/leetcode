const createHelloWorld = () => {
  return (...args: unknown[]): string => {
    return "Hello World";
  }
};

const newFunction = createHelloWorld();
newFunction();