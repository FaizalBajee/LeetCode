function second(word) {
    let arr = word.split(" ");
    console.log(arr)
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[i].length < arr[j].length) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr)
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i - 1])
        break;
    }
}
second("55555 333 4444 22")