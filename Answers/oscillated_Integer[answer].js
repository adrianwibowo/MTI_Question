
let lastElement,
    flag = false,
    result = "";

const Oscillated = (input) => {

    //insert the input argument to lastElement variable and result , add changed lastElement to result
    try {
        if (lastElement == undefined) {
            lastElement = input
            result += `${input} `
            lastElement = lastElement - 5
            result += `${lastElement} `
        }

        //condition for the next element until it create mirrored number
        if (lastElement !== input && lastElement > 0 && !flag) {
            lastElement = lastElement - 5
            result += `${lastElement} `
            return Oscillated(input)
        } else if (lastElement !== input && lastElement <= 0) {
            flag = true
            lastElement = lastElement + 5
            result += `${lastElement} ` 
            return Oscillated(input)
        } else if (lastElement !== input && lastElement > 0 && flag) {
            lastElement = lastElement + 5
            result += `${lastElement} `
            return Oscillated(input)
        } else if (lastElement == input && flag) {
            return result
        }

    } finally { // clear up the variable for the next execution
        lastElement = undefined
        flag = false
        result = ''
    }



}
console.log(Oscillated(8));
console.log(Oscillated(69));
console.log(Oscillated(120));
