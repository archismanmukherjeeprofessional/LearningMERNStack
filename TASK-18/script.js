const greetName = document.getElementById('name')
function greet(){
  const greetBarVal = document.getElementById('greet-bar').value
  greetName.innerText=`, ${greetBarVal}`
}
const red = document.getElementById('red')
red.addEventListener('click',()=>{
  red.style.backgroundColor = "red";
  red.style.color = "white";
  red.style.boxShadow = "4px 4px 10px 0px #ff00009f";
})
const blue = document.getElementById('blue')
blue.addEventListener('click',()=>{
  blue.style.backgroundColor = "blue";
    blue.style.color = "white";
  blue.style.boxShadow = "4px 4px 10px 0px #0400ff9f";
})
const green = document.getElementById('green')
green.addEventListener('click',()=>{
  green.style.backgroundColor = "green";
    green.style.color = "white";
  green.style.boxShadow = "4px 4px 10px 0px #09ff009f";
})
const yellow = document.getElementById('yellow')
yellow.addEventListener('click',()=>{
  yellow.style.backgroundColor = "yellow";
  yellow.style.boxShadow = "4px 4px 10px 0px #fbff00d5";
})