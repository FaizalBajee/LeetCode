const array = [1, 3, 4, 5];

const findMissingNumber = (array) => {
  const lastValueIndedx = array.length - 1;
  const lastvalue = array[lastValueIndedx];
  let sum = 0;
  for (i = 1; i <= lastvalue; i++) {
    sum += i;
  }
  //we can alson use the below formula to find the sum
  //const expectedSum = (lastValue * (lastValue + 1)) / 2;

  let sumOfArray = array.reduce((acc, arr) => {
    return (acc += arr);
  }, 0);
  return sum - sumOfArray;
};

console.log(findMissingNumber(array));
