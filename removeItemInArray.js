let array = [1, 2, 3, 4, 5, 6, 7, 8, 9] //Need to remove 4
console.log(array)
//First of all we need to check the index of the element 
index = array.indexOf(4)
//Then splice it
array.splice(index, 1)
console.log(array)