

let clicks=1

const TIMEOUT= 5000;

const display= document.querySelector('#display');
const button= document.querySelector('#button');
const counter= document.querySelector('#counter');


button.onclick = start
 
  
function start(){

button.onclick=()=>counter.textContent= clicks++;
console.log(clicks);


const startTime= Date.now();
display.textContent= formatTime(TIMEOUT);


const interval=setInterval(()=>{
const delta=Date.now()-startTime;
display.textContent=formatTime(TIMEOUT-delta);

if (display.textContent<= 0) {
    clearInterval(interval);
}



});



const timeout=setTimeout(()=>{
button.onclick=null;

display.textContent='game over';
  
    },TIMEOUT);
}


function  formatTime(ms) {
 return Number.parseFloat(ms/1000).toFixed(2);
}