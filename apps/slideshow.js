const slideShowContainer = document.getElementById('slideshow');
const slideContainer = document.getElementById('slide-container');
const numbers = document.getElementById('numbers');
const imageNumbers = Array.from(numbers.children);
const images = Array.from(slideContainer.children);
const arrowLeft = slideShowContainer.children[1].children[0];
const arrowRight = slideShowContainer.children[1].children[1];

let counter = 1;
let widthSize = images[0].clientWidth;

console.log(numbers);

changeImage();

window.addEventListener('resize', () => {
    widthSize = images[0].clientWidth;
    changeImage();
})

numbers.addEventListener('click', (ev) => {
    counter = ev.target.innerHTML;

    imageNumbers.forEach((item) => {
        if (item.classList.contains('selected')) {
            item.classList.toggle('selected');
        }

        if (counter === item.innerHTML) {
            changeImage();
            item.classList.toggle('selected');
        }
    })
})

arrowLeft.addEventListener('click', () => {
    if (counter >= 1) {
        counter--;

        imageNumbers.forEach((item, index) => {
            imageNumbers.forEach((item, index) => {
                if (counter === index+1) {
                    item.classList.toggle('selected');
                } else {
                    if (item.classList.contains('selected')) {
                        item.classList.toggle('selected');
                    }
                }
    
                if (counter === 0) {
                    if (index === 4) {
                        imageNumbers[4].classList.toggle('selected');
                    }
                }
            });
        });

        if (counter === 0) {
            setTimeout(() => {
                counter = images.length-2;
                slideContainer.style.transform = `translateX(-${(widthSize * counter)}px)`;
                slideContainer.style.transition = '0s';
            },500)

            setTimeout(() => {
                slideContainer.style.transition = '450ms ease-in-out';
            },550)
        }
    }
    changeImage(counter);
});

arrowRight.addEventListener('click', () => {
    if (counter <= images.length) {
        counter++;

        imageNumbers.forEach((item, index) => {
            if (counter === index+1) {
                item.classList.toggle('selected')
            } else {
                if (item.classList.contains('selected')) {
                    item.classList.toggle('selected');
                }
            }

            if (counter === 6) {
                if (index+2 === 6) {
                    imageNumbers[0].classList.toggle('selected');
                }
            }
        });

        if (counter === images.length-1) {
            setTimeout(() => {
                counter = 1;
                slideContainer.style.transform = `translateX(-${(widthSize * counter)}px)`;
                slideContainer.style.transition = '0s';
            },500)

            setTimeout(() => {
                slideContainer.style.transition = '450ms ease-in-out';
            },550)
        }
    }

    changeImage();
});

function changeImage () {
    slideContainer.style.transform = `translateX(-${(widthSize * counter)}px)`;
}