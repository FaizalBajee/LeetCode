//node moreThenTwo.js

//which element in array repeated more then 2 times
let arr = [3, 1, 1, 5, 2, 2, 1];

function moreThenTwo(arr) {
  let count = {};

  arr.forEach((num) => {
    console.log(count[num]);
    count[num] = (count[num] || 0) + 1;
  });

  const result = Object.keys(count).filter((key) => count[key] >= 2);

  console.log({ count });
  console.log({ result });
}
moreThenTwo(arr);
