"use strict"
const headerMenu = document.querySelector('.header-menu');
console.log(headerMenu);
const headerBtn = document.querySelector('.header-btn');
const headerBtnImg = document.querySelector('.header-btn-img');
headerBtn.addEventListener("click",function () {
    if(headerMenu.classList.toggle('active')){
        headerBtnImg.src = "icons/NAV-CLOSE.svg"
        console.log('Active menu!');
    } else{
        headerBtnImg.src = "icons/NAV.svg" 
        console.log('Closet menu!');
      
        }
})
// headerBtn.onclick = () => {
//     if(headerMenu.classList.toggle('active')){
//         headerBtnImg.src = "icons/NAV-CLOSE.svg"
//     } else{
//         headerBtnImg.src = "icons/NAV.svg"

//     }
// }
AOS.init({
    once:true
});