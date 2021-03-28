
const Bonus = (cokelat) => {
   // write your code here
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
