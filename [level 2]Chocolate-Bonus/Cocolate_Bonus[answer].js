


const Bonus = (cokelat) => {
    let count,
        result;
    try {
        if (count == undefined) {
            count = Math.floor(cokelat / 5)
            result = count + cokelat
        }

        if (count > 5) {
            count = Math.floor(count / 5)
            result += count
            return Bonus(cokelat)
        } else {
            return result
        }
    } finally { //clear up the variable for the next execution
        count = undefined
        result = 0
    }

};

const test = (testCase, result) => {
    if (testCase !== result) return console.log(false);
    return console.log(true);
};


test(Bonus(60), 74);
test(Bonus(100), 124);
test(Bonus(1000), 1249);
test(Bonus(1234), 1539);

// console.log(Bonus(60));
// console.log(Bonus(100));
// console.log(Bonus(1234));
// console.log(Bonus(1000));
