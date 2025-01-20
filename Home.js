const questions = document.querySelectorAll(".question");
const icons = document.querySelectorAll(".fa-chevron-right")
const search = document.querySelector("#searchbar");
questions.forEach((query)=>{
     console.log(query)
    
     query.addEventListener('click',(e)=>{

       let text = e.currentTarget.lastElementChild;
          
       text.classList.toggle('show-text')
       let curicon = e.currentTarget.firstElementChild.lastElementChild;
       curicon.classList.toggle('rotate')
   

     })
})

let backTop = document.querySelector('#back-top');

backTop.addEventListener('click',()=>{
  location.href= ""
});


console.log(search);


