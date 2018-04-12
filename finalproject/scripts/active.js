var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF=urlArray[urlArray.length-1];

if (pageHREF !=="") {
  var menu = document.querySelectorAll('ul#mainmenu li a');
  var i;
  //loop through all the menu items in the navigation
  for(i=0; i<menu.length; i++) {
    var currentURL=(menu[i].getAttribute("href"));
    menu[i].parentNode.className=""; //turn off highliting by default
    if (currentURL===pageHREF) {
      menu[i].parentNode.className="active";
    } //end if
  } //end of the search for a match
} //end of if !==