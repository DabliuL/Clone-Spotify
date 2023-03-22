function entrar() {
    var img = window.document.getElementById('pl1img')
    img.style.backgroundColor = '#3C3C3C'
    var txt = window.document.getElementById('pl1txt')
    txt.style.backgroundColor = '#3C3C3C'
    var play = window.document.getElementById('pl1play')
    play.style.opacity = '100%'
    play.style.top = '225px'
}


function sair() {
    var img = window.document.getElementById('pl1img')
    img.style.backgroundColor = '#282828'
    var txt = window.document.getElementById('pl1txt')
    txt.style.backgroundColor = '#282828'
    var play = window.document.getElementById('pl1play')
    play.style.opacity = '0%'
    play.style.top = '255px'
}

function play() {
    var play = window.document.getElementById('pl1play')
    play.style.backgroundColor = '#428208'
}

function mover() {
    var play = window.document.getElementById('pl1play')
    play.style.backgroundColor = '#65f15d'
}