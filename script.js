

// let allUser = Object.entries(letuser);

// for(let i of allUser){
//     console.log(i[0],':',i[1]);
// }

const students = [
  {
    id: 1,
    name: "Aman",
    age: 20,
    marks: 80
  },
  {
    id: 2,
    name: "Riya",
    age: 22,
    marks: 95
  },
  {
    id: 3,
    name: "Rahul",
    age: 19,
    marks: 70
  },
  {
    id: 4,
    name: "Neha",
    age: 21,
    marks: 88
  }
];

let tm = students.reduce((acc,curr)=>{
  return acc + curr.marks;
},0)

console.log(tm)


// students.find((ele)=>{
//     if(ele.name === 'Neha'){
//         console.log(ele)
//     }
// })



// students.forEach((ele)=>{
//     console.log(ele.name,ele.age,ele.marks)
// })

// let fn = ({ name , city}) => {
//   console.log(name,city)
// }

// fn(letuser)