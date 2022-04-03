const root = document.querySelector(':root')
const choose = document.getElementById('choose-container');
const list = document.getElementById('list-container');
const choices = list.getElementsByClassName('choice');
const specs = document.getElementsByClassName('specs-container');

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 1; i < specs.length; i++) {
        specs[i].style.display = 'none';
    }

    for (let i = 0; i <= 0; i++) {
        choices[i].classList.add('active');
    }
})

choose.addEventListener('click', () => {
    list.classList.toggle('menu-vissible');

    if (list.classList.contains('menu-vissible')) {
        choose.children[1].classList.add('rotate');
    } else {
        choose.children[1].classList.remove('rotate');
    }
})

list.addEventListener('click', (ev) => {
    let target = ev.target;
    let lastName = choose.children[0].innerHTML;
    let specName;

    if (target.classList.contains('engine') ||
        target.classList.contains('steering-suspension') ||
        target.classList.contains('transmission') ||
        target.classList.contains('brakes') ||
        target.classList.contains('safety') ||
        target.classList.contains('dimensions-capacity')) {
            list.classList.remove('menu-vissible');
            list.style.transition = '0ms';

            setTimeout(() => {
                list.style.transition = '550ms ease-in-out'
            }, 10)
            choose.children[1].classList.remove('rotate');

            specName = target.innerHTML;

            choose.children[0].innerHTML = lastName.replace(lastName, specName);

            for (let i = 0; i < specs.length; i++) {
                specs[i].style.display = 'none';

                for (let i = 0; i < choices.length; i++) {
                    choices[i].classList.remove('active');
                    target.classList.add('active');
                }

                if (target.classList[2] === specs[i].classList[2]) {
                    specs[i].style.display = 'block';
                }
            }
        }
})