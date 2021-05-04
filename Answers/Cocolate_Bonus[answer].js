
let count,
    result;

const Bonus = (cokelat) => {

    // try {
    //     if (count == undefined) {
    //         count = Math.floor(cokelat / 5)
    //         result = count + cokelat
    //     }

    //     if (count >= 5) {
    //         count = Math.floor(count / 5)
    //         result += count
    //         return Bonus(cokelat)
    //     } else {
    //         return result
    //     }
    // } finally { //clear up the variable for the next execution
    //     count = undefined
    //     result = 0
    // }

    
    if (cokelat < 5) {
        return cokelat
    }
    else {
        const cokelatBonus = Math.floor(cokelat/5)
        return cokelat + Bonus(cokelatBonus)
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

