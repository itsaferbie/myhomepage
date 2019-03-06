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
            "surfPika.webp",
            "senjougahara.webp",
            "vanilla.webp",
            "fateSaber.webp",
            "firesister.webp",
            "froppy.webp",
            "konaSuba.webp",
            "nozomi.webp",
            "qtGirl.webp",
            "shinobu.webp",
            "whitePiano.webp",
            "yuigahama.webp"
    ],
    randomNumber = myPics[Math.floor(Math.random() * myPics.length)];
    document.getElementById("waifu").src = "img/" + randomNumber;
}

window.onload = startTime;
window.onload = randomImg;