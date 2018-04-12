var today = new Date();
var day = today.getDay();
var date = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemeber", "October", "November", "December"];

document.getElementById("currentdate").innerHTML = days[day] + ", " + date + " " + months[month] + " " + year;