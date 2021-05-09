
const Oscillated = (input) => {
    //write your coed here
}

const test = (testCase, result) => {
    if (testCase !== result) return console.log(false);
    return console.log(true);
};

test(Oscillated(8),'8 3 -2 3 8')
test(Oscillated(69),'69 64 59 54 49 44 39 34 29 24 19 14 9 4 -1 4 9 14 19 24 29 34 39 44 49 54 59 64 69 ')
test(Oscillated(120),'120 115 110 105 100 95 90 85 80 75 70 65 60 55 50 45 40 35 30 25 20 15 10 5 0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 105 110 115 120 ')

