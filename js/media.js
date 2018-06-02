var widthImg = 116;
var count = 4;
var carousel = document.querySelector('.media-duck__carousel-preview');
var list = document.querySelector('.carousel-indicators');
var listElems = document.querySelectorAll('li');
var position = 0;

function left () {
    position = Math.min(position + widthImg * count, 0);
    list.style.marginLeft = position + 'px';
}
function right() {
    position = Math.max(position - widthImg * count, -widthImg * (listElems.length - count));
    list.style.marginLeft = position + 'px';
}
document.querySelector('.media-duck__control-preview-prev').addEventListener('click', left, false);
document.querySelector('.media-duck__control-preview-next').addEventListener('click', right, false);


