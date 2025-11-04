//distence.js

//find the max distence
const arr = [3, 12, 6, 19, 33];

function maxDis(arr) {
  let max_value = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let cur_value = Math.abs(arr[i] - arr[i + 1]);
    console.log({ cur_value });
    if (cur_value > max_value) {
      max_value = cur_value;
    }
  }
  console.log({ max_value });
}
// maxDis(arr);

//shortest distance
const gpsPoints = [12, 15, 22, 25, 28, 40];

function minDis(arr) {
  let min_value = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    let cur_value = Math.abs(arr[i] - arr[i + 1]);
    min_value = Math.min(cur_value, min_value);
  }
  console.log(min_value);
}
// minDis(gpsPoints);


//#
