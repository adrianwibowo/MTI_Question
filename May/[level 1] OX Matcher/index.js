
function OX(data) {
    //create some magic here
    return data.toLowerCase().split("x").length === data.toLowerCase().split("o").length ? "match" : "not match"
}

function test(result,expected) {
    if(result === expected) return console.log( true)
    else return console.log(false)
}

test(OX("ooxx"), "match")
test(OX("Xxx0oo"), "not match")
test(OX("oxAOzx"), "match")
test(OX("xx12o3"), "not match")
test(OX("oOxxxx"), "not match")