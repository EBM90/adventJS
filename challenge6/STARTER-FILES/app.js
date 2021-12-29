let cash = document.getElementById("money")
let value = document.getElementById("priceRange")


function getValue() {
    cash.innerText = (value.value) / 100
}
