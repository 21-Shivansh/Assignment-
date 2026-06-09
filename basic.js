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


