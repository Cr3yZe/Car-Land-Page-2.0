const choose = document.getElementById('choose-container');
const list = document.getElementById('list-container');

choose.addEventListener('click', () => {
    list.classList.toggle('hidden');
})