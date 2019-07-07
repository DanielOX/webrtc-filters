
var video = document.querySelector('#video')
canvas = document.querySelector('#canvas')
ctx = canvas.getContext('2d');
capture = document.querySelector('#capture')
streaming = false

// Filters Trigger
sepia = document.querySelector('#sepia');
grayscale = document.querySelector('#grayscale');
invert = document.querySelector('#invert');


function hasUserMedia() {
    return !!(navigator.getUserMedia || navigator.mozGetUserMedia
        || navigator.msGetUserMedia || navigator.webkitGetUserMedia);
}

if (hasUserMedia()) {

    navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia
        || navigator.msGetUserMedia || navigator.webkitGetUserMedia;
    navigator.getUserMedia({ video: true }, function (stream) {

        // Set Local Stream
        video.srcObject = stream;
        video.play();
        streaming = true

        // Capture the current frame and draw it on canvas
        capture.addEventListener('click', function (event) {
            if (streaming) {
                canvas.width = video.clientWidth
                canvas.height = video.clientHeight
                ctx.drawImage(video, 0, 0);
                filtersSelect();
            }
        });



    }, function (err) { alert('Please Allow Video and Audio Permissions In Your Browser') })

} else {
    alert('Your Browser Doesnot Support Video Capturing Functions')
}





function filtersSelect() {

    // Sepia Filter Listener

    sepia.addEventListener('click', function () {
        canvas.className = "sepia"
    })

    // GrayScale Filter Listener

    grayscale.addEventListener('click', function () {
        canvas.className = "grayscale"
    })

    // Invert Filter Listener

    invert.addEventListener('click', function () {
        canvas.className = "invert"
    })





}