const cross=document.getElementById('cross');
const hamburger=document.getElementById('hamburger');
const mobNav=document.getElementById('mob-nav');
mobNav.style.transform= "translate(50rem)"
cross.addEventListener('click',(e)=>{
    mobNav.style.transform= "translate(50rem)"
})
hamburger.addEventListener('click',(e)=>{
    mobNav.style.transform= "translate(0rem)"
})