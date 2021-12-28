let keyboard = document.getElementsByClassName('key')

function randomKey(lastKey) {

    let random = Math.floor(Math.random() * keyboard.length);

    if(lastKey.getAttribute('class', 'jiggle')){
        lastKey.removeAttribute('class')
        lastKey.classList.add("key");

        let newKey = keyboard[random]
        newKey.classList.add("jiggle");

    }

}

document.addEventListener('keydown', (event) => {
    let selected = document.getElementById(event.key)

    if(selected.getAttribute('class').includes('jiggle')){
        randomKey(selected)
    }
  }, false);


