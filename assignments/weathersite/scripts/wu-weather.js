/*Franklin*/
function franklin(){
$.ajax
({
    type: "GET",
    url: "https://api.wunderground.com/api/933628f837f8f622/conditions/q/MN/Franklin.json",
success: function(data){
document.getElementById('fcurrentWeather').innerHTML = data.current_observation.weather;
document.getElementById('fwindSpeed').innerHTML += data.current_observation.wind_mph + ' MPH';
document.getElementById('fcurrentTemp').innerHTML += data.current_observation.temp_f + '&deg;';
document.getElementById('fwindChill').innerHTML += data.current_observation.windchill_f + '&deg;';


//get icon
var icon = data.current_observation.icon_url;
var securedIcon = icon.replace("http", "https");
document.getElementById('fcurrentIcon').src = securedIcon;
}
})  

$.ajax
({
    type: "GET",
    url: "https://api.wunderground.com/api/933628f837f8f622/forecast/q/MN/Franklin.json",

    success: function(data){
        document.getElementById('ftforecast').innerHTML += data.forecast.txt_forecast.forecastday[0].fcttext ;
    }
})
//get available forecast

$.ajax({
    type: "GET",
    url: "https://api.wunderground.com/api/933628f837f8f622/forecast/q/MN/Franklin.json",

    success: function(data){
        console.log(data)
        //highs
        document.getElementById('hday1').innerHTML = data.forecast.simpleforecast.forecastday[0].high.fahrenheit + "&deg;F";
        document.getElementById('hday2').innerHTML = data.forecast.simpleforecast.forecastday[1].high.fahrenheit + "&deg;F";
        document.getElementById('hday3').innerHTML = data.forecast.simpleforecast.forecastday[2].high.fahrenheit + "&deg;F";
        document.getElementById('hday4').innerHTML = data.forecast.simpleforecast.forecastday[3].high.fahrenheit + "&deg;F";
        //lows
        document.getElementById('lday1').innerHTML = data.forecast.simpleforecast.forecastday[0].low.fahrenheit + "&deg;F";
        document.getElementById('lday2').innerHTML = data.forecast.simpleforecast.forecastday[1].low.fahrenheit + "&deg;F";
        document.getElementById('lday3').innerHTML = data.forecast.simpleforecast.forecastday[2].low.fahrenheit + "&deg;F";
        document.getElementById('lday4').innerHTML = data.forecast.simpleforecast.forecastday[3].low.fahrenheit + "&deg;F";
    }
})
}

/*Greenville*/
function greenville() {
$.ajax
({
    type: "GET",
    url: "https://api.wunderground.com/api/933628f837f8f622/conditions/q/UT/Greenville.json",

success: function(data){
    console.log(data)
document.getElementById('gcurrentWeather').innerHTML = data.current_observation.weather;
document.getElementById('gwindSpeed').innerHTML += data.current_observation.wind_mph + ' MPH';
document.getElementById('gcurrentTemp').innerHTML += data.current_observation.temp_f + '&deg;';
document.getElementById('gwindChill').innerHTML += data.current_observation.windchill_f + '&deg;';


//get icon
var icon = data.current_observation.icon_url;
var securedIcon = icon.replace("http", "https");
document.getElementById('gcurrentIcon').src = securedIcon;
}
})  

$.ajax
({
    type: "GET",
    url: "https://api.wunderground.com/api/933628f837f8f622/forecast/q/UT/Greenville.json",

    success: function(data){
        document.getElementById('gtforecast').innerHTML += data.forecast.txt_forecast.forecastday[0].fcttext;
    }
})
//get available forecast

$.ajax({
    type: "GET",
    url: "https://api.wunderground.com/api/933628f837f8f622/forecast/q/UT/Greenville.json",

    success: function(data){
        console.log(data)
        //highs
        document.getElementById('hday1').innerHTML = data.forecast.simpleforecast.forecastday[0].high.fahrenheit + "&deg;F";
        document.getElementById('hday2').innerHTML = data.forecast.simpleforecast.forecastday[1].high.fahrenheit + "&deg;F";
        document.getElementById('hday3').innerHTML = data.forecast.simpleforecast.forecastday[2].high.fahrenheit + "&deg;F";
        document.getElementById('hday4').innerHTML = data.forecast.simpleforecast.forecastday[3].high.fahrenheit + "&deg;F";
        //lows
        document.getElementById('lday1').innerHTML = data.forecast.simpleforecast.forecastday[0].low.fahrenheit + "&deg;F";
        document.getElementById('lday2').innerHTML = data.forecast.simpleforecast.forecastday[1].low.fahrenheit + "&deg;F";
        document.getElementById('lday3').innerHTML = data.forecast.simpleforecast.forecastday[2].low.fahrenheit + "&deg;F";
        document.getElementById('lday4').innerHTML = data.forecast.simpleforecast.forecastday[3].low.fahrenheit + "&deg;F";
    }
})
}

/*Springfield*/
function springfield(){
$.ajax
({
    type: "GET",
    url: "https://api.wunderground.com/api/933628f837f8f622/conditions/q/MN/Springfield .json",

success: function(data){
    console.log(data)
document.getElementById('scurrentWeather').innerHTML = data.current_observation.weather;
document.getElementById('swindSpeed').innerHTML += data.current_observation.wind_mph + ' MPH';
document.getElementById('scurrentTemp').innerHTML += data.current_observation.temp_f + '&deg;';
document.getElementById('swindChill').innerHTML += data.current_observation.windchill_f + '&deg;';


//get icon
var icon = data.current_observation.icon_url;
var securedIcon = icon.replace("http", "https");
document.getElementById('scurrentIcon').src = securedIcon;
}
})  

$.ajax
({
    type: "GET",
    url: "https://api.wunderground.com/api/933628f837f8f622/forecast/q/MN/Springfield.json",

    success: function(data){
        document.getElementById('stforecast').innerHTML += data.forecast.txt_forecast.forecastday[0].fcttext;
    }
})

//get available forecast
$.ajax({
    type: "GET",
    url: "https://api.wunderground.com/api/933628f837f8f622/forecast/q/MN/Springfield.json",

    success: function(data){
        console.log(data)
        //highs
        document.getElementById('hday1').innerHTML = data.forecast.simpleforecast.forecastday[0].high.fahrenheit + "&deg;F";
        document.getElementById('hday2').innerHTML = data.forecast.simpleforecast.forecastday[1].high.fahrenheit + "&deg;F";
        document.getElementById('hday3').innerHTML = data.forecast.simpleforecast.forecastday[2].high.fahrenheit + "&deg;F";
        document.getElementById('hday4').innerHTML = data.forecast.simpleforecast.forecastday[3].high.fahrenheit + "&deg;F";
        //lows
        document.getElementById('lday1').innerHTML = data.forecast.simpleforecast.forecastday[0].low.fahrenheit + "&deg;F";
        document.getElementById('lday2').innerHTML = data.forecast.simpleforecast.forecastday[1].low.fahrenheit + "&deg;F";
        document.getElementById('lday3').innerHTML = data.forecast.simpleforecast.forecastday[2].low.fahrenheit + "&deg;F";
        document.getElementById('lday4').innerHTML = data.forecast.simpleforecast.forecastday[3].low.fahrenheit + "&deg;F";
    }
})
}