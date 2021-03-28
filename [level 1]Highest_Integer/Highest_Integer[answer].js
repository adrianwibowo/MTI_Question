



const Mencari = (input) => {
    let max,
        result = ''
    try {
        let arr = input.split(" ").map(x => +x)
        max = Math.max(...arr)

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== max) {
                result += `${Math.min(...arr.filter(x => x > arr[i]))} `
            } else { result += `^ ` }
        }
        return result;

    } finally {
        result = ''
    }
}

console.log(Mencari("10 9 2 5 1 2 4 0 56"))
console.log(Mencari("3 8 99 3 2 44 12"))