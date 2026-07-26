let logoText = document.querySelector('.mn_left');
let mode = document.querySelector('.mn_right');
let nightimg = document.querySelector('.night_img');
let morningimg = document.querySelector('.morning_img');
let dashboardPage = document.querySelector('.mb_right1');
let todoPage = document.querySelector('.mb_right2');
let plannerPage = document.querySelector('.mb_right3');
let timmerPage = document.querySelector('.mb_right4');
let goalPage = document.querySelector('.mb_right5');
let motivationPage = document.querySelector('.mb_right6');


let todoTab = document.querySelector('.mbl_div1');
let plannerTab = document.querySelector('.mbl_div2');
let timmerTab = document.querySelector('.mbl_div3');
let goalTab = document.querySelector('.mbl_div4');
let motivationTab = document.querySelector('.mbl_div5');


let todoForm = document.querySelector('.mbr2d1_nav');
let todaMain = document.querySelector('.mbr2d1_main');
let todoArr = JSON.parse(localStorage.getItem('todoTaskArr')) || [];

let plannerForm = document.querySelector('.mbr3d1_nav');
let plannerMain = document.querySelector('.mbr3d1_main');
let planArr = JSON.parse(localStorage.getItem('planTaskArr')) || [];

let goalForm = document.querySelector('.mbr5d1_nav');
let goalMain = document.querySelector('.mbr5d1_main');
let goalArr = JSON.parse(localStorage.getItem('goalTaskArr')) || [];

let ui = (arr,id) => {
    console.log(arr);

    if (id === "todoId") {
      todaMain.innerHTML = "";
      arr.forEach((ele, idx) => {
        let todoDiv = document.createElement("div");
        todoDiv.setAttribute("class", "mbr2d1m_div1");

        todoDiv.innerHTML = `
                                <p class="mbr2d1m_d1Text">${ele}</p>
                                <div class="mbr2d1m_div1_btndiv">
                                    <button onClick="updateTodo('${idx}')" class="r2_editbtn">Edit</button>
                                    <button onClick="deleteTodo('${idx}')" class="r2_delbtn">Delete</button>
                                </div>
                            `;
        todaMain.append(todoDiv);
      });
    } else if (id === "plannerId") {
      plannerMain.innerHTML = "";
      arr.forEach((ele) => {
        let plannerDiv = document.createElement("div");
        plannerDiv.setAttribute("class", "mbr3d1m_div1");

        plannerDiv.innerHTML = `<div class="mbr3d1m_div1_textdiv">
                                        <p class="mbr3d1m_d1Text1">${ele.task}</p>
                                        <p class="mbr3d1m_d1Text2">${ele.time}</p>
                                    </div>                                
                                    <div class="mbr3d1m_div1_btndiv">
                                        <button onClick="updatePlanner('${ele.task}')" class="r3_editbtn">Edit</button>
                                        <button onClick="deletePlanner('${ele.task}')" class="r3_delbtn">Delete</button>
                                    </div>`;
        plannerMain.append(plannerDiv);
      });
    }else {
      goalMain.innerHTML = "";
      arr.forEach((ele, idx) => {
        let goalDiv = document.createElement("div");
        goalDiv.setAttribute("class", "mbr5d1m_div1");

        goalDiv.innerHTML = `
                                <p class="mbr5d1m_d1Text">${ele}</p>
                                <div class="mbr5d1m_div1_btndiv">
                                    <button onClick="updateGoal('${idx}')" class="r5_editbtn">Edit</button>
                                    <button onClick="deleteGoal('${idx}')" class="r5_delbtn">Delete</button>
                                </div>
                            `;
        goalMain.append(goalDiv);
      });
    }
    
}
ui(todoArr,'todoId');
ui(planArr,'plannerId');
ui(goalArr,'goalId');

let themeMode = localStorage.getItem('themeMode') || '☀️ Light';

let applyTheme = (theme) => {

    if(theme === '☀️ Light'){
        mode.textContent = '☀️ Light';
        nightimg.style.display = 'none';
        morningimg.style.display = 'block';
    }else{
        mode.textContent = '🌙 Dark';
        morningimg.style.display = 'none';
        nightimg.style.display = 'block';
    }

    localStorage.setItem('themeMode', theme);
};

applyTheme(themeMode);

mode.addEventListener('click', () => {
    if(mode.textContent === '🌙 Dark'){
        applyTheme('☀️ Light');
    }else{
        applyTheme('🌙 Dark');
    }
});

logoText.addEventListener('click',()=>{
    dashboardPage.style.display = 'grid';
    todoPage.style.display = 'none';
    plannerPage.style.display = 'none';
    timmerPage.style.display = 'none';
    goalPage.style.display = 'none';
    motivationPage.style.display = 'none';

})

todoTab.addEventListener('click',()=>{
    dashboardPage.style.display = 'none';
    todoPage.style.display = 'flex';
    plannerPage.style.display = 'none';
    timmerPage.style.display = 'none';
    goalPage.style.display = 'none';
    motivationPage.style.display = 'none';
})

plannerTab.addEventListener('click',()=>{
    dashboardPage.style.display = 'none';
    todoPage.style.display = 'none';
    plannerPage.style.display = 'flex';
    timmerPage.style.display = 'none';
    goalPage.style.display = 'none';
    motivationPage.style.display = 'none';
})

timmerTab.addEventListener('click',()=>{
    dashboardPage.style.display = 'none';
    todoPage.style.display = 'none';
    plannerPage.style.display = 'none';
    timmerPage.style.display = 'grid';
    goalPage.style.display = 'none';
    motivationPage.style.display = 'none';
})

goalTab.addEventListener('click',()=>{
    dashboardPage.style.display = 'none';
    todoPage.style.display = 'none';
    plannerPage.style.display = 'none';
    timmerPage.style.display = 'none';
    goalPage.style.display = 'flex';
    motivationPage.style.display = 'none';
})

motivationTab.addEventListener('click',()=>{
    dashboardPage.style.display = 'none';
    todoPage.style.display = 'none';
    plannerPage.style.display = 'none';
    timmerPage.style.display = 'none';
    goalPage.style.display = 'none';
    motivationPage.style.display = 'flex';
})

todoForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    let task = e.target[0].value;
    todoArr.push(task);
    localStorage.setItem('todoTaskArr',JSON.stringify(todoArr));
    ui(todoArr,'todoId');  

    todoForm.reset();
})

let updateTodo = (idx) => {
    let newUpdate = prompt('Update your task :',todoArr[idx]);
    if(newUpdate.trim() !== '' ){
        todoArr[idx] = newUpdate;
        localStorage.setItem('todoTaskArr',JSON.stringify(todoArr));
        ui(todoArr,'todoId');
    }
}

let deleteTodo = (idx) => {
    todoArr.splice(idx,1);
    localStorage.setItem('todoTaskArr',JSON.stringify(todoArr));
    ui(todoArr,'todoId');
}

plannerForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    let time = e.target[0].value;
    let task = e.target[1].value;

    let obj = {
        time,
        task
    }

    planArr.push(obj);
    localStorage.setItem('planTaskArr',JSON.stringify(planArr));
    ui(planArr,'plannerId');

    plannerForm.reset();
});

let updatePlanner = (name) => {
    let task = planArr.find(ele => ele.task === name);
    let taskIdx = planArr.findIndex(ele => ele.task === name );
    let newUpdate = prompt("Enter your task :",task.task);
    let newTime = prompt('Enter your time in hh:mm format :',task.time);
    if(newUpdate.trim() !== ''){
        task.task = newUpdate;
        task.time = newTime;
        
    }
    // planArr.push(task);
    localStorage.setItem('planTaskArr',JSON.stringify(planArr));
    ui(planArr,'plannerId');
};

let deletePlanner = (name) => {
    let taskIdx = planArr.findIndex(ele => ele.task === name );
    planArr.splice(taskIdx,1);
    localStorage.setItem('planTaskArr',JSON.stringify(planArr))
    ui(planArr,'plannerId');
}

goalForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    let task = e.target[0].value;
    goalArr.push(task)
    localStorage.setItem('goalTaskArr',JSON.stringify(goalArr));
    ui(goalArr,'goalId');  

    goalForm.reset();
})

let updateGoal = (idx) => {
    let newUpdate = prompt('Update your goal :',goalArr[idx]);
    if(newUpdate.trim() !== '' ){
        goalArr[idx] = newUpdate;
        localStorage.setItem('goalTaskArr',JSON.stringify(goalArr))
        ui(goalArr,'goalId');
    }
}

let deleteGoal = (idx) => {
    goalArr.splice(idx,1);
    localStorage.setItem('goalTaskArr',JSON.stringify(goalArr))
    ui(goalArr,'goalId');
}

let r4Mode = document.querySelector('.mbr4d1_top');
let focusDiv = document.querySelector('.focus_div');
let breakDiv = document.querySelector('.brk_div');
let longBrkDiv = document.querySelector('.longbrk_div');
let setTimeMin = document.querySelector('.timmer_ft_min');
let setTimeSec = document.querySelector('.timmer_ft_sec');

let selmode = 'Focus' ;
let timeMin = 30;
let timeSec = 0;

let updateDisplay = () => {
    setTimeMin.textContent = String(timeMin).padStart(2, '0');
    setTimeSec.textContent = String(timeSec).padStart(2, '0');
    sessionDone.textContent = String(sessionCount).padStart(1, '0');
}

r4Mode.addEventListener('click',(e)=>{
    let tempMode = e.target;
    if(tempMode.textContent === 'Focus'){
        focusDiv.style.backgroundColor = '#0097FF';
        focusDiv.style.boxShadow = '0 0 8px rgba(0, 149, 255, 0.6), 0 0 16px rgba(50, 168, 253, 0.4)';
        breakDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        breakDiv.style.boxShadow = 'none';
        longBrkDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        longBrkDiv.style.boxShadow = 'none'; 

        selmode = 'Focus';
        
        timeMin = 30;
        timeSec = 0;
        
        updateDisplay();
    }
    else if (tempMode.textContent === 'Break'){
        focusDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        focusDiv.style.boxShadow = 'none';
        breakDiv.style.backgroundColor = '#0097FF';
        breakDiv.style.boxShadow = '0 0 8px rgba(0, 149, 255, 0.6), 0 0 16px rgba(50, 168, 253, 0.4)';
        longBrkDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        longBrkDiv.style.boxShadow = 'none';

        selmode = 'Break';
        
        timeMin = 5;
        timeSec = 0;

        updateDisplay();
    }
    else{
        focusDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        focusDiv.style.boxShadow = 'none';
        breakDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        breakDiv.style.boxShadow = 'none';
        longBrkDiv.style.backgroundColor = '#0097FF';
        longBrkDiv.style.boxShadow = '0 0 8px rgba(0, 149, 255, 0.6), 0 0 16px rgba(50, 168, 253, 0.4)';

        selmode = 'LngBreak';

        timeMin = 15;
        timeSec = 0;
        
        updateDisplay();
    }
})

let playDiv = document.querySelector('.play_div');
let pauseDiv = document.querySelector('.pause_div');
let resetDiv = document.querySelector('.reset_div');
let sessionDone = document.querySelector('.mbr4d2_text2');

let timmer = null;

let sessionCount = 0;

playDiv.addEventListener('click',()=>{
    if(timmer !== null) return;

    timmer = setInterval(() => {
        if(timeMin === 0 && timeSec === 0){
            clearInterval(timmer);
            timmer = null;
            alert("Time's Up!!!");
            sessionCount++;
            return;
        }
        if(timeSec === 0){
            timeMin-- ;
            timeSec = 59;
        }else{
            timeSec-- ; 
        };

        updateDisplay();
    }, 1000);
})

pauseDiv.addEventListener('click',()=>{
    clearInterval(timmer);
    timmer = null;
})

resetDiv.addEventListener('click',()=>{
    clearInterval(timmer);
    timmer = null;
    sessionCount = 0;
    if(selmode === 'Focus'){
        timeMin = 30;
        timeSec = 0;
        updateDisplay();
    }
    else if(selmode === 'Break'){
        timeMin = 5;
        timeSec = 0;
        updateDisplay();
    }
    else{
        timeMin = 15;
        timeSec = 0;
        updateDisplay();
    }
})

let quoteText = document.querySelector('.qt_span');
let quote_auth = document.querySelector('.qa_span');
let quoteText1 = document.querySelector('.qt_span1');
let quote_auth1 = document.querySelector('.qa_span1');

// let allQuote = null;

// let getQuote = async() =>{
//     try {
//         let response = await fetch('https://dummyjson.com/quotes');
//         let data = await response.json();
//         let randomIdx = Math.floor(Math.random() * data.quotes.length);
//         console.log(data.quotes[randomIdx])
//         quoteText.textContent =  data.quotes[randomIdx].quote;
//         quote_auth.textContent = data.quotes[randomIdx].author;
//     } catch (error) {
//         console.log(error)        
//     }
// }

let allQuote = [
  {
    "id": 1,
    "quote": "The unexamined life is not worth living.",
    "author": "Socrates",
    "category": "Philosophy"
  },
  {
    "id": 2,
    "quote": "Wonder is the beginning of wisdom.",
    "author": "Socrates",
    "category": "Wisdom"
  },
  {
    "id": 3,
    "quote": "To know, is to know that you know nothing.",
    "author": "Socrates",
    "category": "Knowledge"
  },
  {
    "id": 4,
    "quote": "He who is not contented with what he has, would not be contented with what he would like to have.",
    "author": "Socrates",
    "category": "Contentment"
  },
  {
    "id": 5,
    "quote": "Patience is bitter, but its fruit is sweet.",
    "author": "Aristotle",
    "category": "Patience"
  },
  {
    "id": 6,
    "quote": "Knowing yourself is the beginning of all wisdom.",
    "author": "Aristotle",
    "category": "Wisdom"
  },
  {
    "id": 7,
    "quote": "Quality is not an act, it is a habit.",
    "author": "Aristotle",
    "category": "Habits"
  },
  {
    "id": 8,
    "quote": "The more you know, the more you know you don't know.",
    "author": "Aristotle",
    "category": "Knowledge"
  },
  {
    "id": 9,
    "quote": "Happiness depends upon ourselves.",
    "author": "Aristotle",
    "category": "Happiness"
  },
  {
    "id": 10,
    "quote": "Well begun is half done.",
    "author": "Aristotle",
    "category": "Action"
  },
  {
    "id": 11,
    "quote": "Waste no more time arguing what a good man should be. Be one.",
    "author": "Marcus Aurelius",
    "category": "Character"
  },
  {
    "id": 12,
    "quote": "The happiness of your life depends upon the quality of your thoughts.",
    "author": "Marcus Aurelius",
    "category": "Stoicism"
  },
  {
    "id": 13,
    "quote": "You have power over your mind—not outside events. Realize this, and you will find strength.",
    "author": "Marcus Aurelius",
    "category": "Mindset"
  },
  {
    "id": 14,
    "quote": "The best revenge is not to be like your enemy.",
    "author": "Marcus Aurelius",
    "category": "Character"
  },
  {
    "id": 15,
    "quote": "Very little is needed to make a happy life.",
    "author": "Marcus Aurelius",
    "category": "Life"
  },
  {
    "id": 16,
    "quote": "Luck is what happens when preparation meets opportunity.",
    "author": "Seneca",
    "category": "Success"
  },
  {
    "id": 17,
    "quote": "Difficulties strengthen the mind, as labor does the body.",
    "author": "Seneca",
    "category": "Resilience"
  },
  {
    "id": 18,
    "quote": "We suffer more often in imagination than in reality.",
    "author": "Seneca",
    "category": "Psychology"
  },
  {
    "id": 19,
    "quote": "It is not the man who has too little, but the man who craves more, that is poor.",
    "author": "Seneca",
    "category": "Contentment"
  },
  {
    "id": 20,
    "quote": "While we wait for life, life passes.",
    "author": "Seneca",
    "category": "Life"
  },
  {
    "id": 21,
    "quote": "The unexamined life is not worth living.",
    "author": "Socrates",
    "category": "Philosophy"
  },
  {
    "id": 22,
    "quote": "Wonder is the beginning of wisdom.",
    "author": "Socrates",
    "category": "Wisdom"
  },
  {
    "id": 23,
    "quote": "To know, is to know that you know nothing.",
    "author": "Socrates",
    "category": "Knowledge"
  },
  {
    "id": 24,
    "quote": "He who is not contented with what he has, would not be contented with what he would like to have.",
    "author": "Socrates",
    "category": "Contentment"
  },
  {
    "id": 25,
    "quote": "Patience is bitter, but its fruit is sweet.",
    "author": "Aristotle",
    "category": "Patience"
  },
  {
    "id": 26,
    "quote": "Knowing yourself is the beginning of all wisdom.",
    "author": "Aristotle",
    "category": "Wisdom"
  },
  {
    "id": 27,
    "quote": "Quality is not an act, it is a habit.",
    "author": "Aristotle",
    "category": "Habits"
  },
  {
    "id": 28,
    "quote": "The more you know, the more you know you don't know.",
    "author": "Aristotle",
    "category": "Knowledge"
  },
  {
    "id": 29,
    "quote": "Happiness depends upon ourselves.",
    "author": "Aristotle",
    "category": "Happiness"
  },
  {
    "id": 30,
    "quote": "Well begun is half done.",
    "author": "Aristotle",
    "category": "Action"
  },
  {
    "id": 31,
    "quote": "Waste no more time arguing what a good man should be. Be one.",
    "author": "Marcus Aurelius",
    "category": "Character"
  },
  {
    "id": 32,
    "quote": "The happiness of your life depends upon the quality of your thoughts.",
    "author": "Marcus Aurelius",
    "category": "Stoicism"
  },
  {
    "id": 33,
    "quote": "You have power over your mind—not outside events. Realize this, and you will find strength.",
    "author": "Marcus Aurelius",
    "category": "Mindset"
  },
  {
    "id": 34,
    "quote": "The best revenge is not to be like your enemy.",
    "author": "Marcus Aurelius",
    "category": "Character"
  },
  {
    "id": 35,
    "quote": "Very little is needed to make a happy life.",
    "author": "Marcus Aurelius",
    "category": "Life"
  },
  {
    "id": 36,
    "quote": "Luck is what happens when preparation meets opportunity.",
    "author": "Seneca",
    "category": "Success"
  },
  {
    "id": 37,
    "quote": "Difficulties strengthen the mind, as labor does the body.",
    "author": "Seneca",
    "category": "Resilience"
  },
  {
    "id": 38,
    "quote": "We suffer more often in imagination than in reality.",
    "author": "Seneca",
    "category": "Psychology"
  },
  {
    "id": 39,
    "quote": "It is not the man who has too little, but the man who craves more, that is poor.",
    "author": "Seneca",
    "category": "Contentment"
  },
  {
    "id": 40,
    "quote": "While we wait for life, life passes.",
    "author": "Seneca",
    "category": "Life"
  },
  {
    "id": 41,
    "quote": "The supreme art of war is to subdue the enemy without fighting.",
    "author": "Sun Tzu",
    "category": "Strategy"
  },
  {
    "id": 42,
    "quote": "Well done is better than well said.",
    "author": "Benjamin Franklin",
    "category": "Action"
  },
  {
    "id": 43,
    "quote": "Be yourself; everyone else is already taken.",
    "author": "Oscar Wilde",
    "category": "Individuality"
  },
  {
    "id": 44,
    "quote": "Do what you can, with what you have, where you are.",
    "author": "Theodore Roosevelt",
    "category": "Motivation"
  },
  {
    "id": 45,
    "quote": "Knowing others is intelligence; knowing yourself is true wisdom.",
    "author": "Lao Tzu",
    "category": "Wisdom"
  },
  {
    "id": 46,
    "quote": "An investment in knowledge pays the best interest.",
    "author": "Benjamin Franklin",
    "category": "Education"
  },
  {
    "id": 47,
    "quote": "The only true wisdom is in knowing you know nothing.",
    "author": "Socrates",
    "category": "Knowledge"
  },
  {
    "id": 48,
    "quote": "He who conquers himself is the mightiest warrior.",
    "author": "Confucius",
    "category": "Self Control"
  },
  {
    "id": 49,
    "quote": "To improve is to change; to be perfect is to change often.",
    "author": "Winston Churchill",
    "category": "Growth"
  },
  {
    "id": 50,
    "quote": "The impediment to action advances action. What stands in the way becomes the way.",
    "author": "Marcus Aurelius",
    "category": "Stoicism"
  },
  {
    "id": 51,
    "quote": "The journey is the reward.",
    "author": "Chinese Proverb",
    "category": "Life"
  },
  {
    "id": 52,
    "quote": "Knowledge speaks, but wisdom listens.",
    "author": "Jimi Hendrix",
    "category": "Wisdom"
  },
  {
    "id": 53,
    "quote": "A man who has committed a mistake and doesn't correct it is committing another mistake.",
    "author": "Confucius",
    "category": "Learning"
  },
  {
    "id": 54,
    "quote": "The whole future lies in uncertainty: live immediately.",
    "author": "Seneca",
    "category": "Life"
  },
  {
    "id": 55,
    "quote": "If you would be loved, love, and be lovable.",
    "author": "Benjamin Franklin",
    "category": "Relationships"
  },
  {
    "id": 56,
    "quote": "It is easier to prevent bad habits than to break them.",
    "author": "Benjamin Franklin",
    "category": "Habits"
  },
  {
    "id": 57,
    "quote": "He who knows when he can fight and when he cannot will be victorious.",
    "author": "Sun Tzu",
    "category": "Strategy"
  },
  {
    "id": 58,
    "quote": "Success depends upon previous preparation.",
    "author": "Confucius",
    "category": "Success"
  },
  {
    "id": 59,
    "quote": "Nothing strengthens authority so much as silence.",
    "author": "Leonardo da Vinci",
    "category": "Leadership"
  },
  {
    "id": 60,
    "quote": "Our life is what our thoughts make it.",
    "author": "Marcus Aurelius",
    "category": "Mindset"
  },
  {
    "id": 61,
    "quote": "The greatest wealth is to live content with little.",
    "author": "Plato",
    "category": "Contentment"
  },
  {
    "id": 62,
    "quote": "Do not seek for events to happen as you wish, but wish them to happen as they do happen.",
    "author": "Epictetus",
    "category": "Stoicism"
  },
  {
    "id": 63,
    "quote": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    "author": "William Shakespeare",
    "category": "Wisdom"
  },
  {
    "id": 64,
    "quote": "The beginning is the most important part of the work.",
    "author": "Plato",
    "category": "Action"
  },
  {
    "id": 65,
    "quote": "To know what you know and what you do not know, that is true knowledge.",
    "author": "Confucius",
    "category": "Knowledge"
  },
  {
    "id": 66,
    "quote": "No great thing is created suddenly.",
    "author": "Epictetus",
    "category": "Success"
  },
  {
    "id": 67,
    "quote": "Experience is a hard teacher because she gives the test first, the lesson afterward.",
    "author": "Vernon Law",
    "category": "Learning"
  },
  {
    "id": 68,
    "quote": "He who asks a question remains a fool for five minutes. He who does not ask remains a fool forever.",
    "author": "Chinese Proverb",
    "category": "Learning"
  },
  {
    "id": 69,
    "quote": "Better to light a candle than curse the darkness.",
    "author": "Chinese Proverb",
    "category": "Hope"
  },
  {
    "id": 70,
    "quote": "Fortune favors the brave.",
    "author": "Terence",
    "category": "Courage"
  },
  {
    "id": 71,
    "quote": "Every new beginning comes from some other beginning's end.",
    "author": "Seneca",
    "category": "Life"
  },
  {
    "id": 72,
    "quote": "A house divided against itself cannot stand.",
    "author": "Abraham Lincoln",
    "category": "Leadership"
  },
  {
    "id": 73,
    "quote": "To be prepared is half the victory.",
    "author": "Miguel de Cervantes",
    "category": "Preparation"
  },
  {
    "id": 74,
    "quote": "A wise man adapts himself to circumstances, as water shapes itself to the vessel.",
    "author": "Chinese Proverb",
    "category": "Adaptability"
  },
  {
    "id": 75,
    "quote": "Nothing is particularly hard if you divide it into small jobs.",
    "author": "Henry Ford",
    "category": "Productivity"
  },
  {
    "id": 76,
    "quote": "The only limit to our realization of tomorrow is our doubts of today.",
    "author": "Franklin D. Roosevelt",
    "category": "Motivation"
  },
  {
    "id": 77,
    "quote": "It is impossible for a man to learn what he thinks he already knows.",
    "author": "Epictetus",
    "category": "Learning"
  },
  {
    "id": 78,
    "quote": "Character is destiny.",
    "author": "Heraclitus",
    "category": "Character"
  },
  {
    "id": 79,
    "quote": "If there is no struggle, there is no progress.",
    "author": "Frederick Douglass",
    "category": "Perseverance"
  },
  {
    "id": 80,
    "quote": "Victory belongs to the most persevering.",
    "author": "Napoleon Bonaparte",
    "category": "Success"
  },
  {
    "id": 81,
    "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "author": "Nelson Mandela",
    "category": "Resilience"
  },
  {
    "id": 82,
    "quote": "He who has a why to live can bear almost any how.",
    "author": "Friedrich Nietzsche",
    "category": "Purpose"
  },
  {
    "id": 83,
    "quote": "The secret of getting ahead is getting started.",
    "author": "Mark Twain",
    "category": "Action"
  },
  {
    "id": 84,
    "quote": "A journey of a thousand miles begins with a single step.",
    "author": "Lao Tzu",
    "category": "Perseverance"
  },
  {
    "id": 85,
    "quote": "Life is really simple, but we insist on making it complicated.",
    "author": "Confucius",
    "category": "Life"
  },
  {
    "id": 86,
    "quote": "The only true wisdom is in knowing you know nothing.",
    "author": "Socrates",
    "category": "Wisdom"
  },
  {
    "id": 87,
    "quote": "It is the power of the mind to be unconquerable.",
    "author": "Seneca",
    "category": "Mindset"
  },
  {
    "id": 88,
    "quote": "Well begun is half done.",
    "author": "Aristotle",
    "category": "Action"
  },
  {
    "id": 89,
    "quote": "Do not pray for an easy life; pray for the strength to endure a difficult one.",
    "author": "Bruce Lee",
    "category": "Strength"
  },
  {
    "id": 90,
    "quote": "Our greatest weakness lies in giving up.",
    "author": "Thomas A. Edison",
    "category": "Persistence"
  },
  {
    "id": 91,
    "quote": "The best way to predict the future is to create it.",
    "author": "Peter Drucker",
    "category": "Leadership"
  },
  {
    "id": 92,
    "quote": "Knowing yourself is the beginning of all wisdom.",
    "author": "Aristotle",
    "category": "Self Awareness"
  },
  {
    "id": 93,
    "quote": "He who conquers himself is the mightiest warrior.",
    "author": "Confucius",
    "category": "Discipline"
  },
  {
    "id": 94,
    "quote": "No man is free who is not master of himself.",
    "author": "Epictetus",
    "category": "Stoicism"
  },
  {
    "id": 95,
    "quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "author": "Buddha",
    "category": "Mindfulness"
  },
  {
    "id": 96,
    "quote": "Success usually comes to those who are too busy to be looking for it.",
    "author": "Henry David Thoreau",
    "category": "Success"
  },
  {
    "id": 97,
    "quote": "What you think, you become.",
    "author": "Buddha",
    "category": "Mindset"
  },
  {
    "id": 98,
    "quote": "The successful warrior is the average man, with laser-like focus.",
    "author": "Bruce Lee",
    "category": "Focus"
  },
  {
    "id": 99,
    "quote": "The harder the conflict, the greater the triumph.",
    "author": "George Washington",
    "category": "Success"
  },
  {
    "id": 100,
    "quote": "Energy and persistence conquer all things.",
    "author": "Benjamin Franklin",
    "category": "Persistence"
  }
]

let getQuote = () => {
    let randomIdx = Math.floor(Math.random() * allQuote.length);
    console.log(allQuote[randomIdx].quote)
    quoteText.textContent = allQuote[randomIdx].quote;
    quote_auth.textContent = allQuote[randomIdx].author;
    quoteText1.textContent = allQuote[randomIdx].quote;
    quote_auth1.textContent = allQuote[randomIdx].author;

}

let quoteBtn = document.querySelector('.mbr6_gnq');

quoteBtn.addEventListener('click',()=>{
    getQuote();
})


document.addEventListener("DOMContentLoaded", () => {
    getQuote();
});