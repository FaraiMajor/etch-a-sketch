const container = document.querySelector('.grid');
const resetButton = document.querySelector('button')
const slider = document.querySelector('input');
let gridSize = document.querySelector('.grid-size');

let sizeOfGrid = 10;

makegrid(sizeOfGrid);

function makegrid(sizeOfGrid) {
    for (let i = 0; i < sizeOfGrid; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < sizeOfGrid; j++) {
            const boxSize = 500 / sizeOfGrid
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${boxSize}px`;
            gridBox.style.height = `${boxSize}px`

            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
            })
            row.appendChild(gridBox)
        }
        container.appendChild(row)
    }
}

// reset grid
function reset() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    makegrid(sizeOfGrid)
}
resetButton.addEventListener('click', reset);

//change grid size
slider.addEventListener('mouseup', (e) => {
    sizeOfGrid = e.target.value;
    reset();
    gridSize.textContent = `${sizeOfGrid}x${sizeOfGrid}`;
});



//Rainbow coloring
const rainbows = document.querySelector('.rainbow');

function rainbow() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    const allDivs = document.querySelectorAll('.grid-box')
    allDivs.forEach(div => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        })
    })
}

rainbows.addEventListener('click', rainbow);

//get random color
const random = document.querySelector('.random');

function randoms() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    const allDivs = document.querySelectorAll('.grid-box')
    allDivs.forEach(div => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        })
    })
}

random.addEventListener('click', randoms);