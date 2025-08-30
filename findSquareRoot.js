const array = [1, 2, 3, 4, 5, 6, 7, 8];
const rootFor = 64;

const findSquareRoot = (array, num) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midValue = array[mid];
    let midSquare = midValue * midValue;
    console.log({ midValue, midSquare });

    if (midSquare == num) {
      return midValue;
    } else if (midSquare > num) {
      right = mid - 1;
    } else if (midSquare < num) {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(findSquareRoot(array, rootFor));

