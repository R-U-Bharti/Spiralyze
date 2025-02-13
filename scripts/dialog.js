const dialog = document.querySelector("dialog");
const video = document.querySelector("video");

function showDialog() {
    dialog.showModal()
    video.play()
}

function closeDialog() {
    dialog.close()
    video.pause()
}