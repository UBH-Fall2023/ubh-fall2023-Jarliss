var video;
var txtOutput = "Off";

//handle playing/stopping video
function videoPlayer(state) {
    video = document.querySelector("#videoElement");

    if (state == 'stop') {
        //stopping video display state
        txtOutput = "Off";
        console.log("Stopping Video");
        const stream = video.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
            track.stop();
        });


    } else if (navigator.mediaDevices.getUserMedia) {
        //display video feed state
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

//update output field
function display(){
    document.getElementById("output").innerHTML = txtOutput;
}