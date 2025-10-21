const str = "amma";
const symmetricalUsingForLoop = (str) => {
  let left = 0;
  let right = str.length - 1;
  let mid = Math.floor((left + right) / 2);
  for (let i = 0; i <= mid; i++) {
      if(str[left] !== str[right]){
        return false
      }
      left++;
      right--;
  }
  return true
};

const symmetricalUsingWhileLoop = (str) => {
  let left = 0;
  let right = str.length - 1;
  let mid = Math.floor((left + right) / 2);
  while(left < right) {
      if(str[left] !== str[right]){
        return false
      }
      left++;
      right--;
  }
  return true
};


// console.time("WhileLoopExecution");
console.log(symmetricalUsingWhileLoop(str));
// console.timeEnd("WhileLoopExecution");
console.log("----------------------")
// console.time("ForLoopExecution");
console.log(symmetricalUsingForLoop(str));
// console.timeEnd("ForLoopExecution");
