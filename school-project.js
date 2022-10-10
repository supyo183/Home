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

var i = 0;
var txt = 'Javier Jaramillo';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("header").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

console.log('sitev1.1.4')