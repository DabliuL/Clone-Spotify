var music = 'audio1'

function playm1() {
    music = 'audio1'
    console.log(music)
    document.getElementById('audio1').pause();
    document.getElementById('audio2').pause();
    document.getElementById('audio3').pause();
    document.getElementById('audio4').pause();
    document.getElementById('audio5').pause();
    var play = window.document.getElementById('pl1play')
    play.style.backgroundColor = '#428208'
    document.getElementById(music).play();
    var pause = window.document.getElementById('pl1pause')
    pause.style.top = '390px'
    play.style.top = '460px'
    pause.style.opacity = '100%'
    play.style.opacity = '0%'
    play.style.width = '0%'
}

function playm2() {
    music = 'audio2'
    console.log(music)
    document.getElementById('audio1').pause();
    document.getElementById('audio2').pause();
    document.getElementById('audio3').pause();
    document.getElementById('audio4').pause();
    document.getElementById('audio5').pause();
    var play = window.document.getElementById('pl1play')
    play.style.backgroundColor = '#428208'
    document.getElementById(music).play();
    var pause = window.document.getElementById('pl1pause')
    pause.style.top = '390px'
    play.style.top = '460px'
    pause.style.opacity = '100%'
    play.style.opacity = '0%'
    play.style.width = '0%'
}

function playm3() {
    music = 'audio3'
    console.log(music)
    document.getElementById('audio1').pause();
    document.getElementById('audio2').pause();
    document.getElementById('audio3').pause();
    document.getElementById('audio4').pause();
    document.getElementById('audio5').pause();
    var play = window.document.getElementById('pl1play')
    play.style.backgroundColor = '#428208'
    document.getElementById(music).play();
    var pause = window.document.getElementById('pl1pause')
    pause.style.top = '390px'
    play.style.top = '460px'
    pause.style.opacity = '100%'
    play.style.opacity = '0%'
    play.style.width = '0%'
}

function playm4() {
    music = 'audio4'
    console.log(music)
    document.getElementById('audio1').pause();
    document.getElementById('audio2').pause();
    document.getElementById('audio3').pause();
    document.getElementById('audio4').pause();
    document.getElementById('audio5').pause();
    var play = window.document.getElementById('pl1play')
    play.style.backgroundColor = '#428208'
    document.getElementById(music).play();
    var pause = window.document.getElementById('pl1pause')
    pause.style.top = '390px'
    play.style.top = '460px'
    pause.style.opacity = '100%'
    play.style.opacity = '0%'
    play.style.width = '0%'
}

function playm5() {
    music = 'audio5'
    console.log(music)
    document.getElementById('audio1').pause();
    document.getElementById('audio2').pause();
    document.getElementById('audio3').pause();
    document.getElementById('audio4').pause();
    document.getElementById('audio5').pause();
    var play = window.document.getElementById('pl1play')
    play.style.backgroundColor = '#428208'
    document.getElementById(music).play();
    var pause = window.document.getElementById('pl1pause')
    pause.style.top = '390px'
    play.style.top = '460px'
    pause.style.opacity = '100%'
    play.style.opacity = '0%'
    play.style.width = '0%'
}

function play() {
    var play = window.document.getElementById('pl1play')
    play.style.backgroundColor = '#428208'
    document.getElementById(music).play();
    var pause = window.document.getElementById('pl1pause')
    pause.style.top = '390px'
    play.style.top = '460px'
    pause.style.opacity = '100%'
    play.style.opacity = '0%'
    play.style.width = '0%'

}

function pause() {
    var pause = window.document.getElementById('pl1pause')
    pause.style.backgroundColor = '#428208'
    document.getElementById('audio1').pause();
    document.getElementById('audio2').pause();
    document.getElementById('audio3').pause();
    document.getElementById('audio4').pause();
    document.getElementById('audio5').pause();
    var play = window.document.getElementById('pl1play')
    pause.style.top = '290px'
    play.style.top = '390px'
    pause.style.opacity = '0%'
    play.style.opacity = '100%'
    play.style.width = '70px'
}

function sair() {
    var play = window.document.getElementById('pl1play')
    play.style.backgroundColor = '#65F15D'
    play.style.width = '70px'
    var pause = window.document.getElementById('pl1pause')
    pause.style.backgroundColor = '#65F15D'
    pause.style.width = '70px'
}

function mover() {
    var play = window.document.getElementById('pl1play')
    play.style.backgroundColor = '#65F15D'
    var pause = window.document.getElementById('pl1pause')
    pause.style.backgroundColor = '#65F15D'
}

function entrar() {
    var m1 = window.document.getElementById('music1')
    m1.style.backgroundColor = '#414141'
    var p1 = window.document.getElementById('pplay1')
    p1.style.opacity = '100%';
}

function sairm() {
    var m1 = window.document.getElementById('music1')
    m1.style.backgroundColor = '#2b2b2b'
    var p1 = window.document.getElementById('pplay1')
    p1.style.opacity = '0%';
}

function entrarm2() {
    var m2 = window.document.getElementById('music2')
    m2.style.backgroundColor = '#414141'
    var p2 = window.document.getElementById('pplay2')
    p2.style.opacity = '100%';
}

function sairm2() {
    var m2 = window.document.getElementById('music2')
    m2.style.backgroundColor = '#2b2b2b'
    var p2 = window.document.getElementById('pplay2')
    p2.style.opacity = '0%';
}

function entrarm3() {
    var m3 = window.document.getElementById('music3')
    m3.style.backgroundColor = '#414141'
    var p3 = window.document.getElementById('pplay3')
    p3.style.opacity = '100%';
}

function sairm3() {
    var m3 = window.document.getElementById('music3')
    m3.style.backgroundColor = '#2b2b2b'
    var p3 = window.document.getElementById('pplay3')
    p3.style.opacity = '0%';
}

function entrarm4() {
    var m4 = window.document.getElementById('music4')
    m4.style.backgroundColor = '#414141'
    var p4 = window.document.getElementById('pplay4')
    p4.style.opacity = '100%';
}

function sairm4() {
    var m4 = window.document.getElementById('music4')
    m4.style.backgroundColor = '#2b2b2b'
    var p4 = window.document.getElementById('pplay4')
    p4.style.opacity = '0%';
}

function entrarm5() {
    var m5 = window.document.getElementById('music5')
    m5.style.backgroundColor = '#414141'
    var p5 = window.document.getElementById('pplay5')
    p5.style.opacity = '100%';
}

function sairm5() {
    var m5 = window.document.getElementById('music5')
    m5.style.backgroundColor = '#2b2b2b'
    var p5 = window.document.getElementById('pplay5')
    p5.style.opacity = '0%';
}

function volume() {
    var volu = window.document.getElementById('volume')
    var vol = volu.value;
    document.getElementById('audio1').volume = vol;
    document.getElementById('audio2').volume = vol;
    document.getElementById('audio3').volume = vol;
    document.getElementById('audio4').volume= vol;
    document.getElementById('audio5').volume= vol;

}