var requestURL =   "https://byui-cit230.github.io/weather/data/towndata.json";

var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();


    request.onload = function() {
        var jsondata = request.response;
        var data = jsondata['towns'];

        //Franklin 
            //Motto
                document.getElementById('franklin').innerHTML = "Motto: " + data[0].motto + "<br>"
            //year founded
                document.getElementById('franklin').innerHTML +=  "Year Founded: " + data[0].yearFounded
            //Average Rainfall
                document.getElementById('franklin').innerHTML += "<br>" +  "Average Rainfall: " + data[0].averageRainfall
            //Events
                var headers = ''
                for(i=0; i < data[0].events.length; i++){
                   headers += data[0].events[i] + "<br>";
                }
                document.getElementById('fevents').innerHTML = headers;

        //Greenville
            //Motto
                document.getElementById('greenville').innerHTML = "Motto: " + data[1].motto + "<br>"
            //year founded
                document.getElementById('greenville').innerHTML +=  "Year Founded: " + data[1].yearFounded
            //Average Rainfall
                document.getElementById('greenville').innerHTML += "<br>" +  "Average Rainfall: " + data[1].averageRainfall
            //Events
                headers = ''
                for(i=0; i < data[1].events.length; i++){
                    headers += data[1].events[i] + "<br>";
                }
                document.getElementById('gevents').innerHTML = headers;
           
        //Springville                
            //Motto
                document.getElementById('springfield').innerHTML = "Motto: " + data[3].motto + "<br>"
            //year founded
                document.getElementById('springfield').innerHTML +=  "Year Founded: " + data[3].yearFounded
            //Average Rainfall
                document.getElementById('springfield').innerHTML +=  "<br>" + "Average Rainfall: " + data[3].averageRainfall
            //Events
                headers = ''
                for(i=0; i < data[3].events.length; i++){
                    headers += data[3].events[i] + "<br>";
                }
                document.getElementById('sevents').innerHTML = headers;
}