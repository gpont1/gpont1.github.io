
function show1() {
    var x = document.getElementById("bike1");
    var y = document.getElementById("bike2");
    var z = document.getElementById("bike3")   
    if( y.style.display === "block") {
        y.style.display = "none";
    } 
    if ( z.style.display === "block") {
        z.style.display = "none";
    }
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function show2() {
    var x = document.getElementById("bike1");
    var y = document.getElementById("bike2");
    var z = document.getElementById("bike3")
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    if (z.style.display === "block") {
        x.style.display = "none"; 
    }
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}
function show3() {
    var x = document.getElementById("bike1");
    var y = document.getElementById("bike2");
    var z = document.getElementById("bike3")

    if (x.style.display === "block") {
        x.style.display = "none";
    }
    if (y.style.display === "block"){
        y.style.display = "none";
    }
        if (z.style.display === "none") {
        z.style.display = "block";
    } else {
        z.style.display = "none";
    }
}
