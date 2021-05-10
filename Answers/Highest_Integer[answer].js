



const Mencari = (input) => {
    let max,
    result = ''
    let arr = input.split(" ").map(x => +x)
    max = Math.max(...arr)

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== max && (i == arr.length - 1)) {
            result += `${Math.min(...arr.filter(x => x > arr[i]))}`
        }
        else if (arr[i] !== max) {
            result += `${Math.min(...arr.filter(x => x > arr[i]))} `
        } 
        else if(arr[i] == max && (i == arr.length - 1)) result += `^`
        else { result += `^ ` }
    }
  
    return result;
}

console.log(Mencari("10 9 2 5 1 2 4 0 56"))
console.log(Mencari("3 8 99 3 2 44 12"))