var high = +document.getElementById("high").innerHTML;
var low = +document.getElementById("low").innerHTML;
var t = (high + low) / 2;
var s = 3;
var f = 35.74 + .6215 * t -35.75 * Math.pow(s, .16) +.4275 * t * Math.pow(s, .16);

document.getElementById("chill").innerHTML = 'Wind Chill: ' +  Math.round(f) + '&deg;';