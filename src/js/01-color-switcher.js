function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
const startBtn=document.querySelector("[data-start]");
const stopBtn=document.querySelector("[data-stop]");
let flag;
startBtn.addEventListener("click", function () {
    flag=setInterval(function(){   
        document.body.style.backgroundColor = getRandomHexColor()},1000);
        startBtn.disabled=true;
        stopBtn.disabled=false;
        })
stopBtn.addEventListener("click",function(){
    clearInterval(flag);
     startBtn.disabled=false;
     stopBtn.disabled=true;
 });
