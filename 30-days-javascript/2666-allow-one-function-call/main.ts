type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

const once = (fn: Function): OnceFn => {
  let hasBeenCalled = false;
  let result;

  return function (...args) {
      if(!hasBeenCalled) {
        result = fn(...args);
        hasBeenCalled = true;
        return result;
      }

      return undefined;
    };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
