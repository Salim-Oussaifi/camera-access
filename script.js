// Get the button and video elements from the DOM
const startCameraButton = document.getElementById('start-camera');
const videoElement = document.getElementById('video');

// Function to start the camera when the button is clicked
startCameraButton.addEventListener('click', function() {
    // Check if the browser supports the camera API
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Request access to the camera
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                // Set the video element's source to the camera stream
                videoElement.srcObject = stream;
            })
            .catch(function(error) {
                console.error('Error accessing camera: ', error);
                alert('Unable to access camera. Please check your permissions.');
            });
    } else {
        alert('Your browser does not support accessing the camera.');
    }
});
