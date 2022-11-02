var deadline = new Date(Date.UTC(2022, 12, 1, 23));
var x = setInterval(function () {
    var t = deadline - new Date();
    // console.log(t);
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
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
if (screen.width <= 576) {
    // console.log(HeroSection);
    //console.log(iconList);
    HeroSection.appendChild(iconList);
}