var keepTime;
var breakTime = 5;
var pomoTime = 25;
var snd = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/460540/wind_chime_2_02.ogg');
var pomoDiv = document.getElementById("pomoTime");
var timeDiv = document.getElementById("time");
var breakDiv = document.getElementById("breakTime");
var titleDiv = document.getElementById("title");

function startTimer(duration, show) {
    var start = Date.now(),
        diff,
        mins,
        secs;

    function timer() {
        diff = (duration * 60) - (((Date.now() - start) / 1000) | 0);
        mins = (diff / 60) | 0;
        secs = (diff % 60) | 0;
        mins = mins < 10 ? '0' + mins : mins;
        secs = secs < 10 ? '0' + secs : secs;

        show.innerHTML = mins + ':' + secs;

        if (diff === 0) {
            window.clearInterval(keepTime);
            snd.play();
            titleDiv.innerHTML = 'Time To Take a Break!!';
        }
    };

    timer();
    keepTime = setInterval(timer);
}

function pomoPlus() {
    pomoTime += 1;
    if (pomoTime < 10) {
        pomoDiv.innerHTML = '0' + pomoTime + ':' + '00';
        timeDiv.innerHTML = '0' + pomoTime + ':' + '00';
    } else {
        pomoDiv.innerHTML = pomoTime + ':' + '00';
        timeDiv.innerHTML = pomoTime + ':' + '00';
    }
}

function pomoMinus() {
    pomoTime -= 1;
    if (pomoTime < 10) {
        pomoDiv.innerHTML = '0' + pomoTime + ':' + '00';
        timeDiv.innerHTML = '0' + pomoTime + ':' + '00';
    } else {
        pomoDiv.innerHTML = pomoTime + ':' + '00';
        timeDiv.innerHTML = pomoTime + ':' + '00';
    }
}

function startPomo() {
    window.clearInterval(keepTime);
    snd.play();
    startTimer(pomoTime, timeDiv);
    titleDiv.innerHTML = 'POMODORO!!';
};

function startBreak() {
    window.clearInterval(keepTime);
    snd.play();
    startTimer(breakTime, timeDiv);
    titleDiv.innerHTML = 'BREAK!!';
};

function resetTimer() {
    window.clearInterval(keepTime);
    pomoTime = 25;
    pomoDiv.innerHTML = pomoTime + ':' + '00';
    timeDiv.innerHTML = pomoTime + ':' + '00';
    titleDiv.innerHTML = 'POMODORO OVER!!';
}

function resetBreak() {
    window.clearInterval(keepTime);
    breakTime = 5;
    breakDiv.innerHTML = '0' + breakTime + ':' + '00';
    timeDiv.innerHTML = '0' + breakTime + ':' + '00';
    titleDiv.innerHTML = 'BREAK OVER!!';
}



function breakPlus() {
    breakTime += 1;
    if (breakTime < 10) {
        breakDiv.innerHTML = '0' + breakTime + ':' + '00';
        timeDiv.innerHTML = '0' + breakTime + ':' + '00';
    } else {
        breakDiv.innerHTML = breakTime + ':' + '00';
        timeDiv.innerHTML = breakTime + ':' + '00';
    }
}

function breakMinus() {
    breakTime -= 1;
    if (breakTime < 10) {
        breakDiv.innerHTML = '0' + breakTime + ':' + '00';
        timeDiv.innerHTML = '0' + breakTime + ':' + '00';
    } else {
        breakDiv.innerHTML = breakTime + ':' + '00';
        timeDiv.innerHTML = breakTime + ':' + '00';
    }
}