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
let todoArr = [];

let plannerForm = document.querySelector('.mbr3d1_nav');
let plannerMain = document.querySelector('.mbr3d1_main');
let planArr = [];

let goalForm = document.querySelector('.mbr5d1_nav');
let goalMain = document.querySelector('.mbr5d1_main');
let goalArr = [];

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


mode.addEventListener('click',(e)=>{
    let text = e.target;   
    if( text.textContent === '🌙 Dark'){
        text.textContent = '☀️ Light';
        nightimg.style.display = 'none';
        morningimg.style.display = 'block';
    }else{
        text.textContent = '🌙 Dark';
        morningimg.style.display = 'none';
        nightimg.style.display = 'block';
    }
})

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
    todoArr.push(task)
    ui(todoArr,'todoId');  

    todoForm.reset();
})

let updateTodo = (idx) => {
    let newUpdate = prompt('Update your task :',todoArr[idx]);
    if(newUpdate.trim() !== '' ){
        todoArr[idx] = newUpdate;
        ui(todoArr,'todoId');
    }
}

let deleteTodo = (idx) => {
    todoArr.splice(idx,1);
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
        // planArr.splice(taskIdx,1);
    }
    // planArr.push(task);
    ui(planArr,'plannerId');
};

let deletePlanner = (name) => {
    let taskIdx = planArr.findIndex(ele => ele.task === name );
    planArr.splice(taskIdx,1);
    ui(planArr,'plannerId');
}

goalForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    let task = e.target[0].value;
    goalArr.push(task)
    ui(goalArr,'goalId');  

    goalForm.reset();
})

let updateGoal = (idx) => {
    let newUpdate = prompt('Update your goal :',goalArr[idx]);
    if(newUpdate.trim() !== '' ){
        goalArr[idx] = newUpdate;
        ui(goalArr,'goalId');
    }
}

let deleteGoal = (idx) => {
    goalArr.splice(idx,1);
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
    sessionDone.textContent = String(sessionCount).padStart(2, '0');
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