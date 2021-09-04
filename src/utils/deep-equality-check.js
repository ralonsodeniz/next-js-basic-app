export const deepEqualityCheck = (firstVariable, secondVariable) =>
  firstVariable &&
  secondVariable &&
  typeof firstVariable === 'object' &&
  typeof firstVariable === typeof secondVariable &&
  firstVariable.constructor === secondVariable.constructor
    ? Object.keys(firstVariable).length ===
        Object.keys(secondVariable).length &&
      Object.keys(firstVariable).every((key) =>
        deepEqualityCheck(firstVariable[key], secondVariable[key]),
      )
    : firstVariable === secondVariable;
