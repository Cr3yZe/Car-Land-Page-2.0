const arrowsContainer = slideshow.children[6];
console.log(arrowsContainer);

let lastImage = 1;
showPhoto(lastImage);

arrowsContainer.addEventListener('click', (ev) => {
    let target = ev.target;

    if (target.classList.contains('left-arrow')) {
        lastImage += -1;
    } else if (target.classList.contains('right-arrow')) {
        lastImage += 1;
    }

    showPhoto(lastImage);
})

function showPhoto (x) {
    let images = document.getElementsByClassName('slideshow-image');

    for (let i = 0; i < images.length; i++) {
        iamges[i].style.display = 'none';
    }
}