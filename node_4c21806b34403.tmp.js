const steps = (imput) => {
  try {
    for (let step = 0; imput >= 1; step++) {
      if (imput == 1) {
        return step
      } else if (imput % 2 == 0) {
        imput / 2
      } else {
        imput * 3 + 1
      }
    }
  } catch (error) {
    throw new Error('Only positive numbers are allowed');
  }
};

console.log(steps(12));