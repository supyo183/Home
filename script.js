function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("navig").style.width = "0";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("navig").style.width = "min-content";
}
var i = 0;
var txt = 'Home';
var speed = 150;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("header").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function e() {
  alert('Baka! You are already home!')
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
console.log('sitev0.4.3')