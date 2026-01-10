//PlusOne.js - incompleded

function PlusOne(digi) {
  try {
    let toNum = digi.join("");
    let num = Number(toNum);

    const one = num + 1;
    const revert = one.toString();
    console.log({ revert });

    const arr = [1, 2, 3, 4, 5];

    // let result = arr.reduce((total, num) => {
    //   let ans = total + num;
    //   return ans
    // }, 0);


  } catch (err) {
    console.log(err);
  }
}
const digi = ["1", "2", "3"];
PlusOne(digi);
