
let innerBox = document.querySelector('.innerBox');
let btn = document.querySelector('button');
let boxes = document.querySelectorAll('.box');
let timmer = document.querySelector('.timmer');
let gmdiv = document.querySelector('.gmdiv');
let drp = document.querySelector('select');
let score = document.querySelector('.score');


let timmerContent = 0;
timmer.textContent = timmerContent;

let scoreContent = 0;
score.textContent = scoreContent;

let repeat = (intervalTime,shuffleTime,timeoutTime) => {
    btn.style.visibility = "hidden";
    let lastBox = null;

    let interval = setInterval(() => {
      timmerContent += 1;
      timmer.textContent = timmerContent;
    }, intervalTime);

    let shuffle = setInterval(() => {
      boxes.forEach((box) => (box.style.backgroundColor = "white"));
      let random = Math.floor(Math.random() * boxes.length);
      boxes[random].style.backgroundColor = "rgb(255, 19, 149)";
      lastBox = boxes[random];

      lastBox.addEventListener('click',()=>{
        scoreContent += 1;
        score.textContent = scoreContent; 
      },{once : true})
      
    }, shuffleTime);

    setTimeout(() => {
      clearInterval(interval);
      clearInterval(shuffle);
    }, timeoutTime);

    setTimeout(() => {
      gmdiv.style.display = "flex";
      setTimeout(() => {
        gmdiv.style.display = 'none';
        btn.style.visibility = 'visible';
        timmer.textContent = 0;
        score.textContent = 0;
        boxes.forEach(box=> box.style.backgroundColor = 'white')
      }, 3000);
    }, timeoutTime + 250);
};

let level = 'Easy';
drp.addEventListener('change',(e)=>{
    level = e.target.value;
})

btn.addEventListener("click", () => {
  if (level == "Easy") {
    repeat(1000,500,15000);    
  } else if (level == "Medium"){
    repeat(1000,250,10000);
  } else {
    repeat(1000,180,7000);
  }

});