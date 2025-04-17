const spinBtn = document.querySelector('.spin-btn');
const wheel =document.querySelector('#wheel')
const prizeDisplay = document.querySelector('.prize-display')
const prizeItem = document.querySelector('#prize-item')
let spinAudio = new Audio('./sound/spin.mp3');
let isSpinning = false;

let prizes = [
    '/img/card-1.png',
    '/img/card-2.png',
    '/img/card-3.png',
    '/img/card-4.png',
    '/img/card-5.png',
    '/img/card-6.png',
    '/img/card-7.png',
    '/img/card-8.png',
]

prizes.reverse();

function spin() {
    if(isSpinning){
        return;
    }
    isSpinning = true;
    spinAudio.play();
    let spinDeg = 1080;
    let random  = Math.floor(Math.random() * 7);
    wheel.style.transition = 'all 10s ease';
    wheel.style.transform = `perspective(1080px) rotateY(${spinDeg + random * 45}deg)`;

    let timeOut = setTimeout(() => {
        isSpinning = false;
        wheel.style.transition = 'none';
        wheel.style.transform = 'perspective(1000px)';
        prizeDisplay.style.display = 'flex';
        prizeItem.src = prizes[random];

},10000)
}
spinBtn.onclick = spin;
prizeDisplay.onclick = function(){
    prizeDisplay.style.display = 'none';
}
