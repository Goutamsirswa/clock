const secoundHand=document.querySelector(".sec-hand");
const minHand=document.querySelector(".min-hand");
const hourHand=document.querySelector(".hour-hand");
function setDate(){
let now=new Date();
let second=now.getSeconds();
let min=now.getMinutes();
let hour=now.getHours();
const secondDeg=((second/60)*360)+90;
const minDeg=((min/60)*360)+90;
const hourDeg=((hour/60)*360)+90;
secoundHand.style.transform=`rotate(${secondDeg}deg)`
minHand.style.transform=`rotate(${minDeg}deg)`
hourHand.style.transform=`rotate(${hourDeg}deg)`
}
setInterval(setDate,1000);