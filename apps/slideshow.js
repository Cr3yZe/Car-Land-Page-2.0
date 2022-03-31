const arrowsContainer = slideshow.children[5];

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
        images[i].style.display = 'none';
    }

    if (x < 1) {
        lastImage = 5;
    }
    if (x > images.length) {
        lastImage = 1;
    }
    
    images[lastImage-1].style.display = 'block';
}