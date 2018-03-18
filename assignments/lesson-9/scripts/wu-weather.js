/*Franklin*/

$.ajax
({
    type: "GET",
    url: "http://api.wunderground.com/api/933628f837f8f622/conditions/q/MN/Franklin.json",

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
    url: "http://api.wunderground.com/api/933628f837f8f622/forecast/q/MN/Franklin.json",

    success: function(data){
        document.getElementById('ftforecast').innerHTML += data.forecast.txt_forecast.forecastday[0].fcttext;
    }
})

/*Greenville*/

$.ajax
({
    type: "GET",
    url: "http://api.wunderground.com/api/933628f837f8f622/conditions/q/MN/Greenville.json",

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
    url: "http://api.wunderground.com/api/933628f837f8f622/forecast/q/MN/Greenville.json",

    success: function(data){
        document.getElementById('gtforecast').innerHTML += data.forecast.txt_forecast.forecastday[0].fcttext;
    }
})

/*Springfield*/

