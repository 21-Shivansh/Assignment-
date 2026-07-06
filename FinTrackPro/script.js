let addTrans = document.querySelector('.dn_button');
let formDiv = document.querySelector('.form_div');
let fcross = document.querySelector('.fh_cross');
let dashpg = document.querySelector('.dashboardPage');
let setpg = document.querySelector('.settingPage');
let  dashtab = document.querySelector('.sb_optDiv1');
let settab = document.querySelector('.sb_optDiv2');

dashtab.addEventListener('click',()=>{
    setpg.style.display = 'none';
    dashpg.style.display = 'flex';

})

settab.addEventListener('click',()=>{
    dashpg.style.display = 'none';
    setpg.style.display = 'flex';
})


addTrans.addEventListener('click',()=>{
    formDiv.style.display = 'flex';
})

fcross.addEventListener('click',()=>{
    formDiv.style.display = 'none';
})

