var table = document.querySelector('.media-duck__content');
var foto = document.querySelector('.media-duck__carousel-foto');
var video = document.querySelector('.media-duck__carousel-video');
var selected;

table.onclick = function(event) {
    var target = event.target;

    while (target != this) {
        if (target.classList[2] == 'media-duck__carousel-video' || target.classList[2] == 'media-duck__carousel-foto') {
            removeClass();
            highlight(target);
            return;
        }
        target = target.parentNode;
    }
};
function removeClass() {
    video.classList.remove('active-window');
    foto.classList.remove('active-window');
}

function highlight(node) {
    if (selected) {
        selected.classList.remove('active-window');
    }
    selected = node;
    selected.classList.add('active-window');
}

