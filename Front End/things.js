var video;
var txtOutput = "Off";

function videoPlayer(state) {
    video = document.querySelector("#videoElement");
    if (state == 'stop') {
        txtOutput = "Off";
        console.log("Stopping Video");
        const stream = video.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
            track.stop();
        });

        video.srcObject = null;

    } else if (navigator.mediaDevices.getUserMedia) {
        txtOutput = "On";
        console.log("Running Video");
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (err0r) {
                console.log(err0r);
            });
    }
    display();
}
function display(){
    document.getElementById("output").innerHTML = txtOutput;
}