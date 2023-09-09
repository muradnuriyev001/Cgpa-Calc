// const subNum = document.getElementById("subjectNum")

// const sub = document.getElementById("subjects")

// const sub3 = document.getElementById("sub3")
// const sub4 = document.getElementById("sub4")
// const sub5 = document.getElementById("sub5")
// const sub6 = document.getElementById("sub6")
// const sub7 = document.getElementById("sub7")
// const sub8 = document.getElementById("sub8")

// subNum.addEventListener("change", ()=>{
//     if(subNum.value === "4"){
//         sub4.classList.remove("dn")
//         sub5.classList.add("dn")
//         sub6.classList.add("dn")
//         sub7.classList.add("dn")
//         sub8.classList.add("dn")
//     }
//     else if(subNum.value === "5"){
//         sub4.classList.remove("dn")
//         sub5.classList.remove("dn")
//         sub6.classList.add("dn")
//         sub7.classList.add("dn")
//         sub8.classList.add("dn")
//     }
//     else if(subNum.value === "6"){
//         sub4.classList.remove("dn")
//         sub5.classList.remove("dn")
//         sub6.classList.remove("dn")
//         sub7.classList.add("dn")
//         sub8.classList.add("dn")
//     }
//     else if(subNum.value === "7"){
//         sub4.classList.remove("dn")
//         sub5.classList.remove("dn")
//         sub6.classList.remove("dn")
//         sub7.classList.remove("dn")
//         sub8.classList.add("dn")
//     }
//     else if(subNum.value === "8"){
//         sub4.classList.remove("dn")
//         sub5.classList.remove("dn")
//         sub6.classList.remove("dn")
//         sub7.classList.remove("dn")
//         sub8.classList.remove("dn")
//     }
    
    
// })


const subNum = document.getElementById("subjectNum");

const sub = document.getElementById("subjects");

const sub3 = document.getElementById("sub3")
const sub4 = document.getElementById("sub4")
const sub5 = document.getElementById("sub5")
const sub6 = document.getElementById("sub6")
const sub7 = document.getElementById("sub7")
const sub8 = document.getElementById("sub8")

const subElements = [sub4, sub5, sub6, sub7, sub8];

subNum.addEventListener("change", () => {
  const selectedValue = parseInt(subNum.value, 10);

  for (let i = 0; i < subElements.length; i++) {
    if (i < selectedValue - 3) {
      subElements[i].classList.remove("dn");
    } else {
      subElements[i].classList.add("dn");
    }
  }
});



//alert if inputs are empty,formula of cgpa,