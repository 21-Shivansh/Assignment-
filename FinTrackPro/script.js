let addTrans = document.querySelector('.dn_button');
let formDiv = document.querySelector('.form_div');
let fcross = document.querySelector('.fh_cross');
let dashpg = document.querySelector('.dashboardPage');
let setpg = document.querySelector('.settingPage');
let  dashtab = document.querySelector('.sb_optDiv1');
let settab = document.querySelector('.sb_optDiv2');
let formD = document.querySelector('.dp_form');
let dm5Container = document.querySelector(".dm5_container");
let dm2Credit = document.querySelector('.dm2_textNum');
let dm3Debit = document.querySelector('.dm3_textNum');
let dm4trans = document.querySelector('.dm4_textNum');
let dm1ta = document.querySelector('.dm1_textNum');



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

let detailsArr = [];
let tca = null;
let tda = null;
let ta = null;
let tt = 0;

let ui = () => {
    dm5Container.innerHTML = "";

    detailsArr.forEach((ele)=>{
        let colorGR ;
        if(ele.signinp === '+'){
            colorGR = 'rgb(0, 155, 23)';
        }else{
            colorGR = 'rgb(157, 0, 0)'
        }
        
        dm5Container.innerHTML += `<div class="dm5_container1">
                            <p class="dcontainer_text1">${ele.dateinp}</p>
                            <p class="dcontainer_text2">${ele.desinp}</p>
                            <p class="dcontainer_text3">${ele.catinp}</p>
                            <p class="dcontainer_text4" style="color : ${colorGR}"><span class="dm5_container_sign">${ele.signinp}</span><span class="dm5_container_curr">$</span>${ele.amtinp}</p>
                            <div class="dcontainer_text5">
                                <div class="dc_editDiv">
                                    <img onClick="updateData('${ele.desinp}')" src="assets/pencil.png" class="pencil_img" alt="">
                                </div>
                                <div class="dc_deleteDiv">
                                    <img src="assets/bin.png" class="bin_img" alt="">
                                </div>
                            </div>
                            `;
    });

    console.log(dm5Container)
};

let handleAmount = () => {
    tca = detailsArr.reduce((acc,curr)=>{
        if(curr.typeinp === 'credit'){
            return acc + Number(curr.amtinp);
        }
        return acc;
    },0);
    tda = detailsArr.reduce((acc,curr)=>{
        if(curr.typeinp === 'debit'){
            return acc + Number(curr.amtinp)
        }
        return acc
    },0);
    tt = detailsArr.length;
    ta = tca - tda;
    dm2Credit.textContent =  `$${tca}`;
    dm3Debit.textContent = `$${tda}`;
    dm4trans.textContent = `${tt}`;
    dm1ta.textContent = `$${ta}`;
}

formD.addEventListener('submit',(e)=>{
    e.preventDefault();

    let typeinp = formD[0].value;
    let desinp = formD[1].value;
    let amtinp = formD[2].value;
    let dateinp = formD[3].value;
    let catinp = formD[4].value;
    let signinp = (typeinp === 'credit') ? '+' : '-' ;

    if((typeinp.trim() && desinp.trim() && amtinp.trim() && dateinp.trim() && catinp.trim() ) === ""){
        alert('Please fill all field');
        return;
    }

    let obj = {
        typeinp,
        desinp,
        amtinp,
        dateinp,
        catinp,
        signinp
    }
    detailsArr.push(obj);

    ui();
    handleAmount();

    formD.reset();
    formDiv.style.display = 'none';
})