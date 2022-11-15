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
var speed = 100;
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
//window.onscroll = function() {myFunction()};
//var navbar = document.getElementById("navbar");
//var sticky = navbar.offsetTop;
//function myFunction() {
//  if (window.pageYOffset >= sticky) {//
//    navbar.classList.add("sticky")
//  } else {
//    navbar.classList.remove("sticky");
//  }
//}
console.log('sitev0.4.0')