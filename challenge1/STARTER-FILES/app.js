let edit = false
let start = false

let interval

let digitMinutes = document.getElementById("digitMin")
let digitSeconds = document.getElementById("digitSec")

function startCountDown() {
    start = !start
    if(start){
      interval =  setInterval(() =>{
            countDown()
          },1000)
    } else {
        clearInterval(interval)
    }
}

function countDown() {
    if(start){
        if(digitSeconds.value <= 0 && digitMinutes.value != 0){
            digitSeconds.value = 59
            if(digitMinutes.value > 9){
                digitMinutes.value--
            } else if(digitMinutes.value < 10 && digitMinutes.value > 0 ){
                digitMinutes.value--
            }
        } else if(digitSeconds.value <= 0 && digitMinutes.value == 0) {
            digitSeconds.value = 0
        } else {
            digitSeconds.value--
        }  
    }
}

//EDIT

function toggleEdit() {
    edit = !edit
    if(edit){
        digitMinutes.removeAttribute("disabled")
        digitSeconds.removeAttribute("disabled")
    } else {
        digitMinutes.setAttribute("disabled", "disabled")
        digitSeconds.setAttribute("disabled", "disabled")       
    }
}