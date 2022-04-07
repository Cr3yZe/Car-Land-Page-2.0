const allTeam = document.getElementsByClassName('person');
const staff = document.getElementById('staff');

let lastIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 1; i < allTeam.length; i++){
        allTeam[i].style.display = 'none';
    }    
});

staff.addEventListener('click', (ev) => {
    let target = ev.target;

    if (target.classList.contains('bx-left-arrow-alt')) {
        lastIndex -= 1;
        
        if (lastIndex === -1){
            lastIndex = 4;
        }
    } else if (target.classList.contains('bx-right-arrow-alt')) {
        lastIndex += 1;

        if (lastIndex === 5) {
            lastIndex = 0;
        }
    }

    lastIndex = lastIndex;

    for (let i = 0; i < allTeam.length; i++){
        allTeam[i].style.display = 'none';
    }
    
    console.log(lastIndex);

    for (let i = 0; i < allTeam.length; i++){
        allTeam[lastIndex].style.display = 'grid';
    }

});