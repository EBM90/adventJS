const music = []

function addMusic() {
    for(let i = 0; i<=22; i++){
        let noise = new Audio(`audio/key-${i+1}.mp3`)
        music.push(noise)
    }
}



function playNote(index) {
    music[index].play()
}

addMusic()