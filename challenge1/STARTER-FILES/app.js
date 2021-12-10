let edit = false
let start = false

let interval

let digitMinutes = document.getElementById("digitMin")
let digitSeconds = document.getElementById("digitSec")

let circle = document.getElementById("ring")

function ending() {
    // Using an if statement to check the class
    if (circle.classList.contains('ending')) {
      // The box that we clicked has a class of bad so let's remove it and add the good class
      circle.classList.remove('ending');
    } else {
      // The user obviously can't follow instructions so let's alert them of what is supposed to happen next
      circle.classList.add('ending');
    }
}

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
            //add red circle here
            ending()
            clearInterval(interval)
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