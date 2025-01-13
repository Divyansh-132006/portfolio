const navbar = document.querySelector(".navBar");
const navline = document.querySelector(".navline");
 navline.addEventListener('click', () =>{
     navbar.classList.toggle('active')
 })
 const btn=document.querySelector(".btnn");
 const circle= document.querySelector(".contain");
 btn.addEventListener('click', () =>{
    circle.classList.toggle('show')
 })