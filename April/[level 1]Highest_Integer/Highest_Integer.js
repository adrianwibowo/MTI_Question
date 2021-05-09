const find = (input) => {
    //write your code here
}

const test = (testCase, result) => {
    if (testCase !== result) return console.log(false);
    return console.log(true);
};

test(find("10 9 2 5 1 2 4 0 56"),'56 10 4 9 2 4 5 1 ^ ')
test(find("3 8 99 3 2 44 12"),'8 12 ^ 8 3 99 44')



