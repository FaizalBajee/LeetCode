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
// pattern4(5);

function patternA(n) {
  // console.log(Math.ceil(n/2))
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      if (
        (i === 1 && j == Math.ceil(n / 2)) ||
        i == Math.ceil(n / 2) ||
        (j == 1 && i > 1) ||
        (j == n && i > 1)
      ) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// patternA(5);

function patternB(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      if (
        j == 1 ||
        (i == 1 && j < n - 1) ||
        (i == n && j < n - 1) ||
        i == Math.ceil(n / 2) ||
        (j == n && i > 1 && i < n)
      ) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
// patternB(5);

function patternC(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      if (
        (j == 1 && i > 1 && i < n) ||
        (i == 1 && j > 1) ||
        (i == n && j > 1)
      ) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// patternC(5);

function patternD(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      if (
        j == 1 ||
        (j == n && i > 1 && i < n) ||
        (i == 1 && j < n - 1) ||
        (i == n && j < n - 1)
      ) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// patternD(5);

function patternE(n) {
  for (let i = 1; i <= n; i++) {
    // let count = 0;
    let line = "";
    for (let j = 1; j <= n; j++) {
      if (j == 1 || i == 1 || i == n || i == Math.ceil(n / 2)) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// patternE(5);

function patternF(n) {
  for (let i = 1; i <= n; i++) {
    // let count = 0;
    let line = "";
    for (let j = 1; j <= n; j++) {
      if (j == 1 || i == 1 || i == Math.ceil(n / 2)) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// patternF(5);

function patternG(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      if (
        i == 1 ||
        j == 1 ||
        i == n ||
        (j == n && i > Math.floor(n / 2)) ||
        (i == Math.ceil(n / 2) && j > Math.ceil(n / 2))
      ) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// patternG(5);

function patternH(n) {
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 1; j <= n; j++) {
      if (j == 1 || i == Math.ceil(n / 2) || j == n) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// patternH(5);

function patternI(n) {
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 1; j <= n; j++) {
      if (
        (j == Math.ceil(n / 2) && i > 2) ||
        (i == 1 && j == Math.ceil(n / 2))
      ) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// patternI(5);

function patternJ(n) {
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 1; j <= n; j++) {
      if (
        (i == 1 && j == n) ||
        (j == n && i > 2) ||
        i == n ||
        (j == 1 && i > Math.floor(n / 2) + 1)
      ) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// patternJ(10);

function patternK(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      if (
        j == 1 ||
        (j == i && i > Math.floor(n / 2)) ||
        (i == i && j == n + 1 - i && j > Math.floor(n / 2))
      ) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// patternK(5);

function patternL(n) {
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 1; j <= n; j++) {
      if (
        (j == Math.ceil(n / 2) && i == 1) ||
        (j == Math.floor(n / 2) && i > 1 && i < n - 1) ||
        (j == Math.ceil(n / 2) + 1 && i > 1 && i < n - 1) ||
        (i == n - 1 && j == Math.ceil(n / 2)) ||
        (i == n && j == Math.floor(n / 2)) ||
        (i == n && j == Math.ceil(n / 2) + 1)
      ) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
//old number
// patternL(11);

function patternM(n) {
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 1; j <= n; j++) {
      if (
        j == 1 ||
        j == n ||
        (i == j && i <= Math.floor(n / 2)) ||
        (i == i && j == n + 1 - i && i <= Math.ceil(n / 2))
      ) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
//old number
// patternM(11);

function patternN(n) {
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 1; j <= n; j++) {
      if (j == 1 || j == n || i == j) {
        line = line + "*";
      }
      line = line + " ";
    }
    console.log(line);
  }
}

// patternN(11);

function patternO(n) {
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 1; j <= n; j++) {
      if (j == 1 || j == n || i == 1 || i == n) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// patternO(5);

function patternP(n) {
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 1; j <= n; j++) {
      if (
        j == 1 ||
        i == 1 ||
        (j == n && i <= Math.ceil(n / 2)) ||
        i == Math.ceil(n / 2)
      ) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// patternP(5);

function patternQ(n) {
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 1; j <= n; j++) {
      if (
        (j == 1 && i < n - 1) ||
        (i == 1 && j < n - 1) ||
        (j == n - 1 && i < n - 1) ||
        (i == n - 1 && j < n - 1) ||
        (i == j && i > Math.floor(n / 2))
      ) {
        line += " *";
      } else {
        line += "  ";
      }
    }
    console.log(line);
  }
}

// patternQ(11);

function patternR(n) {
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 1; j <= n; j++) {
      if (
        j == 1 ||
        i == 1 ||
        i == Math.ceil(n / 2) ||
        (j == n && i < Math.ceil(n / 2)) ||
        // (i == i && i > Math.ceil(n / 2) && j == i)
        (j == j && i >= Math.ceil(n / 2) && i == Math.floor(n / 2) + j)
      ) {
        line += " *";
      } else {
        line += "  ";
      }
    }
    console.log(line);
  }
}

// patternR(11);

function patternS(n) {
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 1; j <= n; j++) {
      if (
        i == 1 ||
        i == n ||
        (j == 1 && i <= Math.ceil(n / 2)) ||
        i == Math.ceil(n / 2) ||
        (j == n && i >= Math.ceil(n / 2))
      ) {
        line += " *";
      } else {
        line += "  ";
      }
    }
    console.log(line);
  }
}

// patternS(11);

function patternT(n) {
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 1; j <= n; j++) {
      if (j == Math.ceil(n / 2) || i == 1) {
        line += " *";
      } else {
        line += "  ";
      }
    }
    console.log(line);
  }
}

// patternT(5);

function patternU(n) {
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 1; j <= n; j++) {
      if (
        (j == 1 && i <= n - 1) ||
        (j == n && i <= n - 1) ||
        (i == n && j > 1 && j <= n - 1)
      ) {
        line += " *";
      } else {
        line += "  ";
      }
    }
    console.log(line);
  }
}

// patternU(5);

function patternV(n) {
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 1; j <= n; j++) {
      // console.log(2 + j ,6 - j )
      if (
        (i >= Math.ceil(n / 2) && j == j && i == Math.floor(n / 2) + j) ||
        (i >= Math.ceil(n / 2) && j == j && i == Math.floor(n / 2) + j) ||
        (i >= Math.ceil(n / 2) &&
          i == Math.floor(n / 2) + j &&
          j == n + 1 - j) ||
        (j == 1 && i < Math.ceil(n / 2)) ||
        (j == n && i <= 3) ||
        (j == i && i == n - 1)
      ) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// patternV(5);

//  for/
function patternV(n) {
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 1; j <= n; j++) {
      // console.log(2 + j ,6 - j )
      if (
        (i >= Math.ceil(n / 2) && j == j && i == Math.floor(n / 2) + j) ||
        (i >= Math.ceil(n / 2) && j == j && i == Math.floor(n / 2) + j) ||
        (i >= Math.ceil(n / 2) &&
          i == Math.floor(n / 2) + j &&
          j == n + 1 - j) ||
        (j == 1 && i < Math.ceil(n / 2)) ||
        (j == n && i <= 3) ||
        (j == i && i == n - 1)
      ) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// patternV(5); #not completed

function patternW(n) {
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 1; j <= n; j++) {
      if (j == 1 || j == n) {
        line += "*";
      } else if (
        (i >= Math.ceil(n / 2) && j == n - i + 1) ||
        (i >= Math.ceil(n / 2) && i == j)
      ) {
        line += " *";
      } else {
        line += "  ";
      }
    }
    console.log(line);
  }
}
patternW(11);
