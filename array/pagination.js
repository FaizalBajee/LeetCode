//pagination.js

const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function pagination(array, currentPage) {
  let pageSize = 5;
  let start = (currentPage - 1) * pageSize + 1;
  let end = start + pageSize - 1;

  let newArr = [];
  //method - 1
  return array.slice(start - 1, end).map((item) => item);
  //method - 2
  for (let i = 1; i <= array.length; i++) {
      if(i >= start && i <= end){
          newArr.push(i)
      }
  }
  return newArr;
}

// pagination(array, 1)
console.log(pagination(array, 3));
