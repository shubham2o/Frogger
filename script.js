const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');

let currentIndex = 76;
const width = 9;

function moveFrog(e) {
    switch (e.key) {
        case 'ArrowLeft':
            console.log('move Left');
            currentIndex -= 1;
            break;
        case 'ArrowRight':
            console.log('move Right');
            currentIndex += 1;
            break;
        case 'ArrowUp':
            console.log('move Up');
            currentIndex -= width;
            break;
        case 'ArrowDown':
            console.log('move Down');
            currentIndex += width;
            break;
    }

    squares[currentIndex].classList.add('frog');
}

document.addEventListener('keyup', moveFrog);