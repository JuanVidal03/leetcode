type ToBeOrNotToBe = {
    toBe: (val: unknown) => boolean;
    notToBe: (val: unknown) => boolean;
};

const expect = (val: unknown): ToBeOrNotToBe => {
  const toBe = (secondVal: unknown) => {
    if (val !== secondVal) {
      throw "Not Equal"
    }

    return true
  };

  const notToBe = (secondVal: unknown) => {
    if (val === secondVal) {
      throw "Equal"
    }

    return true
  }

  return {
    toBe, notToBe
  }
};
