letuser= {
name:"Ritik",
age:20,
city:"Bhopal"
};

let allUser = Object.entries(letuser);

for(let i of allUser){
    console.log(i[0],':',i[1]);
}