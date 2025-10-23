// *
// * *
// * * *
// * * * *
// * * * * *
// Upper left triangle
function pattern1(n) {
  let str = "* ";
  for (let i = 1; i <= n; i++) {
    console.log(str.repeat(i));
  }
}
// pattern1(5);

// * * * * *
// * * * *
// * * *
// * *
// *
// Lower Left Triangle
function pattern2(n) {
  //   for (let i > 0; i <= n; i--) {
  for (let i = n; i >= 0; i--) {
    let str = "* ";
    console.log(str.repeat(i));
  }
}
// pattern2(5);

//      x
//     xx
//    xxx
//   xxxx
//  xxxxx
//  Upper right triangle
function pattern3(n) {
  for (let i = n; i > 0; i--) {
    let space = " ";
    let start = "x";
    console.log(space.repeat(i) + start.repeat(n - i + 1));
  }
  //   for (let i = 1; i <= n; i++) {
  //     let space = " ";
  //     let star = "@";
  //     console.log(space.repeat(n - i) + star.repeat(i));
  //   }
}
// pattern3(5);

// fffff
//  ffff
//   fff
//    ff
//     f
//Lower Right Triangle
function pattern4(n) {
  for (let i = n; i > 0; i--) {
    let space = " ";
    let start = "f";
    console.log(space.repeat(n - i) + start.repeat(i));
  }
}
pattern4(5);
