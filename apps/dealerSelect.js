const dealer = document.getElementById('dealer');
const choiceBox = Array.from(document.getElementsByClassName('shape'));
const choice = document.getElementsByClassName('default-choice');
const choiceSelect = document.getElementsByClassName('select-choice');
const allChoices = document.getElementsByClassName('choice-dealer');
const leftIcon = document.getElementsByClassName('bx-caret-left');

const countrySelect = document.querySelector('.countries-container');
const statesSelect = document.querySelector('.states-container');
const citiesSelect = document.querySelector('.cities-container');
const selectionArray = [countrySelect, statesSelect, citiesSelect];

selectBox();

function selectBox() {
    for (let i = 0; i < choiceBox.length; i++) {
        choiceBox[i].addEventListener('click', () => {
            console.log(true);
            if(!choiceSelect[i].classList.contains('hidden')) {
                choiceSelect[i].classList.add('hidden');
                leftIcon[i].classList.remove('rotate');
            } else {
                for (let x = 0; x < choice.length; x++) {
                    choiceSelect[x].classList.add('hidden');
                    leftIcon[x].classList.remove('rotate');
                }
                choiceSelect[i].classList.toggle('hidden');
                leftIcon[i].classList.toggle('rotate');
            }
        })
    }
};

dealer.addEventListener('click', (ev) => {
    let target = ev.target;
    let choiceContainer;
    let textContent;
    let textForCompare;

    if (target.classList.contains('choice-dealer')) {
        choiceContainer = target.parentElement.parentElement.children[0];
        textContent = target.innerHTML;
        for (let i = 0; i < allChoices.length; i++) {
            textForCompare = allChoices[i].innerHTML;
            if (textContent === textForCompare) {
                choiceContainer.textContent = `${textForCompare}`;
            }
        }
    }
})