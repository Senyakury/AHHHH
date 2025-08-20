let startBtn = document.querySelector('.start-btn');
let main = document.querySelector('.main');
let startCont = document.querySelector('.start-cont');
let music = document.querySelector('.music');
let scream = document.querySelector('.scream');
let text = document.querySelector('.text');
let quack = document.querySelector('.quack');
let scream2 = document.querySelector('.scream2');
let scream3 = document.querySelector('.scream3');
let WhatASave = document.querySelector('.scream4');

startBtn.addEventListener('click', () => {
    quack.play();
    startCont.classList.add('evaporate');
    setTimeout(() => {
        music.play();
        startCont.classList.add('display-none');
        main.classList.remove('display-none')
    }, 600);
    let someInterval = setInterval(() => {
        scream.play()
        text.classList.add('scale');
        setTimeout(()=>{
            scream2.play();
            setTimeout(() => {
                scream3.play();
            }, 400);
        }, 200);
        setTimeout(() => {
            text.classList.remove('scale');
        }, 1000);
    }, 3200);
    setTimeout(() => {
        main.textContent = "What A Save! (Congrats with becoming 15yrs-old, Hope Benzema won't go after you)";
        scream.pause();
        scream.currentTime = 0;
        clearInterval(someInterval);
        music.pause();
        WhatASave.play();
    }, music.duration * 1000 - 2000);
    setTimeout(() => {
        window.location.href = "https://medlux.net.ua/likuvannya-narkomaniyi/";
        window.close();
    }, music.duration * 1000);
});
