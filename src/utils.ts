export const arithmeticStringConvert = (fn: any) => {
  return new Function("return " + fn)();
};
