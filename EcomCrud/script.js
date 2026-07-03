
let addBtn = document.querySelector('.create');
let formDiv = document.querySelector('.form_div');
let pcross = document.querySelector('.fd_cross');
let form = document.querySelector('.frm');
let main = document.querySelector('main');

let productArr = JSON.parse(localStorage.getItem('cars')) || [];

let ui = () => {
  main.innerHTML = "";

  productArr.forEach((ele,idx) => {

    let omc = document.createElement("div");
    omc.setAttribute("class", "outer_mc");

    omc.innerHTML += `<div class="main_card1" style="background-image : url('${ele.pUrl}')">
            </div>
            <div class="main_card2">
                <p class="mc_name">${ele.pName}</p>
                <p class="mc_price"><span class="mc_price_span">$</span>${ele.pPrice}</p>
                <div class="mc_div">
                    <button onClick="updateProduct('${ele.pName}')" class="mc_button edit">Edit</button>
                    <button onClick="deleteProduct('${ele.pName}')" class="mc_button delete">Delete</button>
                </div>
            </div>`;

    main.append(omc);

  });
};

ui();

let visi = false;
let updateIdx = null;

addBtn.addEventListener('click',()=>{
  if(!visi){
    formDiv.style.display = 'block';
    visi = true;
  }
});

pcross.addEventListener("click", () => {
  formDiv.style.display = "none";
  visi = false;
});

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  
  let pName = e.target[0].value;
  let pPrice = e.target[1].value;
  let pUrl = e.target[2].value;

  let obj = {
    pName,
    pPrice,
    pUrl
  };

  if(updateIdx !== null){
    productArr[updateIdx] = obj;
    updateIdx = null;
    localStorage.setItem('cars',JSON.stringify(productArr));
  }else{
    productArr.push(obj);
    localStorage.setItem('cars',JSON.stringify(productArr));
  }
  
  ui();

  form.reset();

  formDiv.style.display = 'none';
  visi = false;

})

let updateProduct = (name) => {
  formDiv.style.display = 'block';
  let product = productArr.find(elem => elem.pName === name);
  updateIdx = productArr.findIndex(elem => elem.pName === name);

  form[0].value = product.pName;
  form[1].value = product.pPrice;
  form[2].value = product.pUrl;
}

let deleteProduct = (name) => {
  let productIdx = productArr.findIndex(elem => elem.pName === name);
  productArr.splice(productIdx,1);
  localStorage.setItem('cars',JSON.stringify(productArr))

  ui();
}

