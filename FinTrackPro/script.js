let addTrans = document.querySelector('.dn_button');
let formDiv = document.querySelector('.form_div');
let fcross = document.querySelector('.fh_cross');


addTrans.addEventListener('click',()=>{
    formDiv.style.display = 'flex';
})

fcross.addEventListener('click',()=>{
    formDiv.style.display = 'none';
})

