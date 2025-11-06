/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return ""
    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1)
            if (!prefix) return ""
        }
    }
    // console.log(prefix)
    return prefix

};


// var longestCommonPrefix = function (strs) {
//     let prefix = ""

//     for (let i = 0; i < strs.length; i++) {
//         let split = strs[i + 1]

//         for (let j = i + 1; j < split.length; j++) {
//             let split1 = strs[i]
//             let split2 = strs[j]
//             //  console.log(split2)
//             if (strs.length == 1 && split[i]) {
//                 prefix += split[i]
//             }
//             if (split1.length == 0) return prefix
//             if (split1[i] !== split2[i]) return prefix

//             if (split1[i] === split2[i] && split1[0] === split2[0] && !prefix.includes(split1[i])) {
//                 prefix += split1[i]
//             }

//         }

//     }
//     console.log(prefix)
//     return prefix

// };
