function aVeryBigSum(arr) {
    //     const container = []
    //     for(const i in arr) {
    //         if(typeof arr[i] === "string") {
    //            arr[i] = Number(arr[i].replace(/[^\d.-]/g, ''))
    //         }
    //         container.push(arr[i])
    //     }
    //     return container.reduce((a,b) => a + b)
    return arr.reduce((a, b) => {
        if (typeof a !== 'number') a = + a.replace(/[^\d.-]/g, '')
        if (typeof b !== 'number') b = + b.replace(/[^\d.-]/g, '')
        return a + b
    })
}

const result = (testStudent, testCase) => testStudent === testCase

console.log(result(aVeryBigSum([1000123, 1000555, 1000171, 1000223]), 4001072))
console.log(result(aVeryBigSum([100071, 99935, 12341, 127833]), 340180))
console.log(result(aVeryBigSum([21376743, 21438743, 23123, 43242]), 42881851))
console.log(result(aVeryBigSum([10001232432, "10003432asdsa", 4328723, "234324dfg"]), 10015798911))