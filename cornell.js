function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function print() {
    var element = document.getElementById("yes");
    var element = document.getElementById("yes_1");
    var element = document.getElementById("yes_2");
    var element = document.getElementById("yes_3");
    var element = document.getElementById("yes-1");
    var element = document.getElementById("yes-2");
    var element = document.getElementById("yes-3");
    var element = document.getElementById("yes-4");
    var element = document.getElementById("yes-5");
    var element = document.getElementById("yes-6");
    var element = document.getElementById("yes-7");
    var element = document.getElementById("yes-8");
    element.classList.add('no-print')
}
var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
  }
    setInterval(refreshTime, 1000);
 
console.log('sitev0.2.1')