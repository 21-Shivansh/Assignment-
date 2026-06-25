
let innerBox = document.querySelector('.innerBox');
let btn = document.querySelector('button');
let boxes = document.querySelectorAll('.box');
let timmer = document.querySelector('.timmer');

btn.addEventListener('click',()=>{
    let timmerContent = 0;
    timmer.textContent = timmerContent;
    let lastBox = null;

    if(timmerContent !== 0){
        timmerContent = 0;
        timmer.textContent = timmerContent;
        return;
    }

    
    let interval = setInterval(() => {
        timmerContent += 1;
        timmer.textContent = timmerContent;
    }, 1000);


    let shuffle = setInterval(() => {

        boxes.forEach(box => box.style.backgroundColor = 'white')

        let random = Math.floor(Math.random()*boxes.length);

        boxes[random].style.backgroundColor = 'red';

        lastBox = boxes[random];

    }, 180);

    setTimeout(() => {
        clearInterval(interval);
        clearInterval(shuffle);
    }, 5000);
})