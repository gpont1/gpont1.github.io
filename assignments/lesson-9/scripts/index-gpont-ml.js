var cities = document.querySelector('main');


var requestURL =   "https://byui-cit230.github.io/weather/data/towndata.json";

var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

console.log(request);

request.onload = function() {

var towns = (request.response);
console.log(towns);
populateCities(towns);
}

function populateCities(towns){
    var myH3 = document.createElement('h3');
    myH3.textContent = towns['name'];
    cities.appendChild(myH3);
    console.log(cities)
}