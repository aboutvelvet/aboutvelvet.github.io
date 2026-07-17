const release = new Date("August 3, 2026 18:00:00 GMT+0900");


function countdown(){

let now = new Date();

let difference = release - now;


if(difference <= 0){

document.querySelector("main").innerHTML =
"<h1>🌊 VELVET SUMMER IS OUT 🌊</h1>";

return;

}


let seconds = Math.floor(difference / 1000);

let days = Math.floor(seconds / 86400);

seconds %= 86400;

let hours = Math.floor(seconds / 3600);

seconds %= 3600;

let minutes = Math.floor(seconds / 60);

seconds %= 60;


document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

}


setInterval(countdown,1000);

countdown();
