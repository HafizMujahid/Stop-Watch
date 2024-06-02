var minHeading = document.getElementById("minHeading").getElementsByTagName("h1")[0];
var secHeading = document.getElementById("secHeading").getElementsByTagName("h1")[0];
var msecHeading = document.getElementById("msecHeading").getElementsByTagName("h1")[0];
var interval;

var msec = 0;
var sec = 0;
var min = 0;

function start() {
    msec++;
    if (msec === 100) {
        sec++;
        msec = 0;
    }

    if (sec === 60) {
        min++;
        sec = 0;
    }

    msecHeading.innerHTML = msec < 10 ? '0' + msec : msec;
    secHeading.innerHTML = sec < 10 ? '0' + sec : sec;
    minHeading.innerHTML = min < 10 ? '0' + min : min;
}

function startWatch() {
    clearInterval(interval);  // Clear any existing interval to prevent multiple intervals
    interval = setInterval(start, 10);
}

function stopWatch() {
    clearInterval(interval);
}

function resetWatch() {
    clearInterval(interval);
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = "00";
    secHeading.innerHTML = "00";
    msecHeading.innerHTML = "00";
}
