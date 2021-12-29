let tip = document.getElementById("tip-amount")
let perPerson = document.getElementById("total-per-person")
let bill = document.getElementById("bill-amount")
let people = document.getElementById("number-of-people")

let fivePercent = document.getElementById("five-percent")
let tenPercent = document.getElementById("ten-percent")
let fifteenPercent = document.getElementById("fifteen-percent")
let twentyPercent = document.getElementById("twenty-percent")

function getInitialNumbers(){
    tip.innerText = 0.00
    perPerson.innerText = 0.00
    bill.value = 0.00
    people.value = 2
}

function getPercentage() {
    if(fivePercent.checked){
        return 0.05
    } else if(tenPercent.checked){
        return 0.10
    } else if(fifteenPercent.checked){
        return 0.15
    } else {
        return 0.20
    }
}

function roundTwoDecimals(number){
    return Math.round(number * 100) / 100
}

function calculate() {

    let finalPercentage = getPercentage()

    let totalTip = roundTwoDecimals(bill.value * finalPercentage)    

    tip.innerText = totalTip

    let total = roundTwoDecimals(totalTip + parseInt(bill.value))

    perPerson.innerText = roundTwoDecimals(total / people.value)
    
}

getInitialNumbers()