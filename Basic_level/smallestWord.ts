const smallest = (str) => {
    let arr = str.split(" ")
    console.log(arr);
    // arr.sort()
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].length > arr[j].length) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr[0])

}
smallest("55555 333 4444 22")