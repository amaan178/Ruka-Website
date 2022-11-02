var deadline = Date("january 1, 2023 24:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline - now;
    // console.log(t);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("day").innerHTML = '00';
        document.getElementById("hour").innerHTML = '00';
        document.getElementById("minute").innerHTML = '00';
        document.getElementById("second").innerHTML = '00';
    }
}, 1000);

var HeroSection = document.getElementById("heroSection");
var iconList = document.getElementById("icons")
if (window.innerWidth <= 360) {
    // console.log(HeroSection);
    // console.log(iconList);
    HeroSection.appendChild(iconList);
}