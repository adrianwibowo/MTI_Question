function duplicateChecker(data) {
    //create some magic here
    let letter = ''
    let count = 0
    for(let i = 0 ; i < data.length ; i++) {
       
        letter = data[i]
        for(let j = 0 ; j < data.length ; j++) {
            if(letter === data[j]) {
                count += 1
            }
        }
        if(count > 1) return "some letter are duplicate" 
        count = 0
    }
    return "no letter are duplicate"
}


function test(result,expected) {
    if(result === expected) return console.log( true)
    else return console.log(false)
}

test(duplicateChecker("martabak"), "some letter are duplicate")
test(duplicateChecker("qurosaki"), "no letter are duplicate")
test(duplicateChecker("merbabu"), "some letter are duplicate")
test(duplicateChecker("merapi"), "no letter are duplicate")