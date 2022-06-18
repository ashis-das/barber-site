var manubtn = document.getElementById("menubtn")
var sidenav = document.getElementById("sidenav")
var manu = document.getElementById("menu")
sidenav.style.right = "-250px"
manubtn.onclick = function() {
    if (sidenav.style.right == "-250px") {
        sidenav.style.right == "0";
        manu.src = "images/close.png";
    } else {
        sidenav.style.right = "-250px";
        manu.src = "images/close.png";
    }
}
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});