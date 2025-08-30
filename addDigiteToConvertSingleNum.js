//eg num = 39
// 3 + 9 = 12
// 1 + 2 = 3// single number

const num = 39;

const convertFunc = (num) => {
  // keep reducing until single digit
  while (num > 9) {
    // split digits and sum them
    num = num.toString().split("").map(Number).reduce((a, b) => a + b, 0);
  }
  return num;
};

console.log(convertFunc(num)); // 3
