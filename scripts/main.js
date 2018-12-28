function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(function () {
        startTime()
    }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    } // add zero in front of numbers < 10
    return i;
}

function randomImg() {
    var myPics = [
            "surfPika.png",
            "senjougahara.png",
            "vanilla.png",
            "fateSaber.png",
            "firesister.png",
            "froppy.png",
            "konaSuba.png",
            "nozomi.png",
            "qtGirl.png",
            "shinobu.png",
            "whitePiano.png",
            "yuigahama.png"
    ],
    randomNumber = myPics[Math.floor(Math.random() * myPics.length)];
    document.getElementById("waifu").src = "img/" + randomNumber;
}

window.onload = startTime;
window.onload = randomImg;