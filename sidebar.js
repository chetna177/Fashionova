let cancel = document.querySelector(".x")
let sidebar = document.querySelector("aside")
// console.log(cancel)
cancel.addEventListener('click',()=>{
     sidebar.classList.toggle('cancel')
})
// console.log(sidebar)
//!display sidebar

let toggle_btn = document.querySelector("#toggle-btn");
console.log(toggle_btn)

toggle_btn.addEventListener("click",()=>{
     sidebar.classList.toggle("show");
})




