//Check if the letters of one string can be rearranged to form another string. If yes, return true, otherwise return false
//e.g = "listen" → "silent" true

const str1 = "abc";
const str2 = "bcb";

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const sorted1 = str1.split("").sort().join("");
  const sorted2 = str2.split("").sort().join("");
  return sorted1 == sorted2;
};

console.log(isAnagram(str1, str2));
