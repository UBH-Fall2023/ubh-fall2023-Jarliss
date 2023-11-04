var video = document.getElementById('video');

var shouldStart = false;

var start = document.getElementById('Start').onclick = function () {
    shouldStart = true;
};

function videoStart() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            video.srcObj = stream;
            video.play();
        });
    }
}