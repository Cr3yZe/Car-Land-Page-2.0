const carContainer = document.getElementById('car-container');
const bubblesContainer = document.getElementById('bubbles-container');
const carImages = document.getElementsByClassName('image');
const bubbles = document.getElementsByClassName('bubble-shape');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('rightArrow');

let carIndex = 0;
let bubbleIndex = 0;


carContainer.addEventListener('click', (ev) => {
    let target = ev.target;

    if (target.classList.contains('left-arrow')) {
        carIndex -= 1;

        if (carIndex <= -1) {
            carIndex = 9;
        }
    } else if (target.classList.contains('right-arrow')) {
        carIndex += 1;

        if (carIndex >= 10) {
            carIndex = 0;
        }
    }

    showCar();
})

bubblesContainer.addEventListener('click', (ev) => {
    let target = ev.target;

    if (target.classList.contains('white-bubble')) {
        bubbleIndex = 0;
    } else if (target.classList.contains('light-gray-bubble')) {
        bubbleIndex = 1;
    } else if (target.classList.contains('gray-bubble')) {
        bubbleIndex = 2;
    } else if (target.classList.contains('black-bubble')) {
        bubbleIndex = 3;
    } else if (target.classList.contains('blue-bubble')) {
        bubbleIndex = 4;
    } else if (target.classList.contains('mat-blue-bubble')) {
        bubbleIndex = 5;
    } else if (target.classList.contains('dark-blue-bubble')) {
        bubbleIndex = 6;
    } else if (target.classList.contains('red-bubble')) {
        bubbleIndex = 7;
    } else if (target.classList.contains('orange-bubble')) {
        bubbleIndex = 8;
    } else if (target.classList.contains('grass-bubble')) {
        bubbleIndex = 9;
    }
    carIndex = bubbleIndex;
    showCar();
})


showCar();

function showCar() {
    for(let i = 0; i < carImages.length; i++) {
        carImages[i].style.display = 'none';
    }

    for(let i = 0; i < bubbles.length; i++) {
        bubbles[i].classList.remove('selected-bubble');
    }

    carImages[carIndex].style.display = 'block';
    bubbles[carIndex].classList.add('selected-bubble');
}