let month = document.getElementById("month");
let year = document.getElementById("year");
let date = document.getElementById("date");
let day = document.getElementById("day");

let today = new Date();

let weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let months = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December'];




date.innerHTML = (today.getDate() <10 ? "0" : "" ) + today.getDate();
month.innerHTML = months[today.getMonth()];
day.innerHTML = weekDays[today.getDay()];
year.innerHTML = today.getFullYear();