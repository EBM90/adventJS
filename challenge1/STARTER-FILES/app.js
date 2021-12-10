let edit = false
let start = false

let interval

let startAndStop = document.getElementById("startAndStop")
let digitMinutes = document.getElementById("digitMin")
let digitSeconds = document.getElementById("digitSec")

let circle = document.getElementById("ring")


function startCountDown() {
    start = !start
    if(start){
      interval =  setInterval(() =>{
            countDown()
          },1000)
      startAndStop.innerText = "stop"
    } else {
        clearInterval(interval)
        startAndStop.innerText = "start"
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
            toggleCircleColor()
            digitSeconds.value = 0
            clearInterval(interval)
            alert("It's the final countdown!");
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

//CHANGES CIRCLE COLOR

function toggleCircleColor() {
    if (circle.classList.contains('ending')) {
      circle.classList.remove('ending');
    } else {
      circle.classList.add('ending');
    }
}