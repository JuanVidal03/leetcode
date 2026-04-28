const gcdOfStrings = (str1: string, str2: string) => {
  const lenStr1 = str1.length;
  const lenStr2 = str2.length;

  const valid = (k: number) => {
    if (lenStr1 % k !== 0 || lenStr2 % k !== 0) return false;
    const n1 = Math.floor(lenStr1 / k);
    const n2 = Math.floor(lenStr2 / k);

    const base = str1.slice(0, k);
    return str1 === base.repeat(n1) && str2 === base.repeat(n2);
  }

  for (let i = Math.min(lenStr1, lenStr2); i > 0; i--) {
    if (valid(i)) {
      return str1.slice(0, i);
    }
  }
  return "";
}
