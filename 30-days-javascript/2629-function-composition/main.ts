type F = (x: number) => number;

function compose(functions: F[]): F {
 	if (functions.length === 0) {
     return function(x) { return x; };
  }

  return functions.reduceRight(function(prevFn, nextFn) {
    return function(x) {
      return nextFn(prevFn(x));
    };
  });
};
