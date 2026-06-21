// let maths = Number(prompt('Enter maths marks'))
// let engl = Number(prompt('Enter eng marks'))
// let sci = Number(prompt('Enter sci marks'))

// let avg = (maths + engl + sci) /3;

// if(avg >= 8){
//     console.log(avg)
//     console.log("You are a good student")
// }else{
//     console.log(avg)
//     console.log("need imgprovemnt")
// }

// let a = 10;

// while( a > 1){
//     if(a % 2 != 0){
//         console.log(false);
//         break;
//     }else{
//         a /= 2;
//     }
// }

// if(a === 1){
//     console.log(true)
// }

// let a = 15;

// let b = Math.sqrt(a);

// if (a%b === 0) {
//     console.log(true)
// }else{
//     console.log(false)
// }

// let a = 12321;

// let org = a;
// let rev = 0;

// while(a > 0){
//     let digit = a % 10;
//     rev = rev*10 + digit;
//     a = Math.floor(a/10);
// }

// if(org == rev){
//     console.log(true)
// }else{
//     console.log(false)
// }

// let n = Number(prompt("Enter a number :"));
// if( n < 1 || isNaN(n)) console.log("invalid input")
// else{
//     sum = 0;
//     while( n >=1) sum += n--;
//     console.log(sum)
// }

// let arr = [10,20,30,40,50];
// let newAr = arr.reduce((acc,val)=>{
//     if(acc>val){
//         return acc;
//     }
//     return val;
// },0)
// console.log(newAr)

// let n = Number(prompt("Enter a number :"))

// let isPrime = false;

// for (let i = 2; i < Math.floor(n) ; i++) {
//     if(n%i === 0){
//         isPrime = false;
//         break;
//     }else{
//         isPrime = true;
//     }
// }

// console.log(isPrime)

// let a = 12;

// for (let i = 1; i <= Math.floor(a/2); i++) {
//     if(a%i === 0){
//         console.log(i)
//     }
// }
// console.log(a)

// let obj = {
//     name:'Krishna',
//     age:22,
//     canVote:function(){
//         console.log(this)

//     }
// }

// console.log(obj.canVote())

// let obj = {
//     user : 'Krishna',
//     greet(){
//         let sayHi = () => {
//             console.log(`${this.user} welcome...`)
//         }
//         sayHi();
//     }
// }

// obj.greet();

// function Best(name,concept){
//     this.name = name;
//     this.concept = concept;
//     this.greet = function(){
//         console.log(this.name);
//         console.log(this.concept);
//     }
// }

// let b1 = new Best('Candle King','M M C');
// let b2 = new Best('NitishFX','S M C')

// console.log(b1)
// console.log(b2)

// b1.greet();

// Before ES6 ----------------------

// function Students (fname,lname,tutor){
//     this.fname = fname;
//     this.lname = lname;
//     this.tutor = tutor;
//     this.intro = function(){
//         console.log(`Hi ${this.fname} ${this.lname}, your tutor is ${this.tutor}`)
//     }
// }

// Students.prototype.intro = function(){
//     console.log(`Hi ${this.fname} ${this.lname}, your tutor is ${this.tutor}`)
// }

// let s1 = new Students('Krishna','singh','candle king')

// console.log(s1)
// s1.intro()

// After ES6 ------------------------

// class Students {
//     constructor(fname,lname,tutor){
//         this.fname = fname;
//         this.lname = lname;
//         this.tutor = tutor;
//     }
//     intro = () => {
//         console.log(`Hi ${this.fname} ${this.lname}, your tutor is ${this.tutor}`)

//     }
// }

// let s1 = new Students('Krishna','singh','candle king')

// console.log(s1)
// s1.intro();

// class Students {
//     constructor(fn,ln,gen,age,intro){
//         this.fn = fn;
//         this.ln = ln;
//         this.gen = gen;
//         this.age = age;
//     }

// }

// function intro(s1){
//         if(s1.age > 18){
//         console.log(`welcome ${s1.fn} ${s1.ln} of gender ${s1.gen} can vote.`)
//         }else{
//         console.log(`welcome ${fn} ${ln} of gender ${gen} can not vote.`)
//         }
// }

// let s1 = new Students('krishna','Prabhu','male',31,intro);

// console.log(s1)

// intro(s1);

// let a = new Promise((res,rej)=>{
//     let status = false;

//     if(status){
//         console.log("Fullfiled")
//     }else{
//         console.log('Rejected')
//     }
// })

// let a = new Promise((res,rej)=>{
//     console.log("your food is coming...")

//     let status = false;

//     setTimeout(()=>{
//         if(status){
//             console.log('your food is here. Pick it up...👍');
//             res();
//         }else{
//             console.log('your order is canceled due to some reason...🤷‍♀️');
//             rej();
//         }
//     },4000)
// }).then(()=>{
//     console.log('pay for your bill 💸')
// }).catch(()=>{
//     console.log('raise a complaint....❌')
// })

// const bulb = document.querySelector('.bulb');
// const btn = document.querySelector('button');

// btn.addEventListener('click',()=>{
//     bulb.classList.toggle('glowUp');
//     if(btn.textContent === 'On'){
//         btn.textContent = 'Off';
//     }else{
//         btn.textContent = 'On'
//     }
// })

// 1.

// let p = [100,250,500,150,700];

// let np = p.filter((ele,idx)=>{
//     if(ele > 300){
//         return ele;
//     }
// })

// console.log(np);

// 2.

// let marks = [80,90,70,85,95];

// let avg = marks.reduce((acc,curr)=>{
//     acc += curr;
//     return acc;
// })

// console.log(avg / marks.length )

// 3.

// let numbers= [1,2,3,2,4,2,5,1,1,1];
// let count = {};

// for(let i = 0;i<numbers.length;i++){
//     if(count[numbers[i]]){
//         count[numbers[i]] += 1;
//     }else{
//         count[numbers[i]] = 1;
//     }
// }

// let maxCount = 0;
// let mostFreq;

// for(let key in count){
//     if(count[key] > maxCount){
//         maxCount = count[key];
//         mostFreq = key;
//     }
// }

// console.log(mostFreq)

// 4.

// letuser = {
//   name: "Ritik",
//   age: 20,
// };

// letuser.age = 21;

// console.log(letuser)




// 5.

// letuser = {
//   name: "Ritik",
//   age: 20,
//   city: "Bhopal",
// };

// for( let key in letuser){
//     console.log(key,':',letuser[key])
// }



// 6.

// let employees = {
//   aman: 25000,
//   ritik: 50000,
//   priya: 45000,
// };

// let highestSalary = 0;
// let personName;

// for(let key in employees){
//     if(employees[key] > highestSalary){
//         highestSalary = employees[key];
//         personName = key;
//     }
// }

// console.log(personName)




// 7.

// function greet(user){
//     console.log(`Hello, ${user}...`)
// }
// greet('Ritik');





// 8.

// let discountCal = (price) =>{
//     return price*0.1;
// }

// console.log(discountCal(1000))




// 9.

// function allSum(...nums){
//     return nums.reduce((acc,curr)=>{
//         acc += curr;
//         return acc;
//     })
// };

// let a = allSum(1,2,3,4);

// console.log(a)


const inputText = document.querySelector('input');
const addBtn = document.querySelector('.btn');
const box2 = document.querySelector('.box2');




addBtn.addEventListener('click',()=>{
    if(inputText.value.trim()===""){
        return;
    }

    const taskDiv = document.createElement('div');
    taskDiv.setAttribute('class','task_div');
    box2.appendChild(taskDiv);
    
    const pText = document.createElement('p');
    pText.setAttribute('class','task_text');
    pText.textContent = inputText.value;
    taskDiv.appendChild(pText);

    const btnE = document.createElement('button');
    btnE.setAttribute('class','btn edit');
    btnE.textContent = 'Edit';

    const btnD = document.createElement('button');
    btnD.setAttribute('class','btn del');
    btnD.textContent = 'Delete';

    const btnDiv = document.createElement('div');
    btnDiv.setAttribute('class','btn_div');
    taskDiv.appendChild(btnDiv)
    btnDiv.before(pText);
    btnDiv.append(btnE,btnD);

    let editStatus = false;
    let eInput;

    btnE.addEventListener('click',()=>{
        if(!editStatus){
            btnE.textContent = 'Done';
            btnE.style.backgroundColor = 'green';

            eInput = document.createElement('input');
            eInput.value = pText.textContent;
            pText.replaceWith(eInput);

            editStatus = true;
        }else{
            pText.textContent = eInput.value;

        eInput.replaceWith(pText);

        btnE.textContent = 'Edit';
        btnE.style.backgroundColor = 'rgb(244, 167, 74)';
        editStatus = false;
        }
    })

    btnD.addEventListener('click',()=>{
        taskDiv.remove();
    })

    inputText.value = null;

})



