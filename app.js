const container = document.querySelector('.grid');
const gridSum = 100;
const sizeOfGrid = gridSum;

function makegrid(gridSum) {
    for (let i = 0; i < gridSum; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < gridSum; j++) {
            const boxSize = 600 / sizeOfGrid
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${boxSize}px`
            gridBox.style.height = `${boxSize}px`

            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
            })
            row.appendChild(gridBox)
        }
        container.appendChild(row)
    }
}
makegrid(sizeOfGrid)

// const allDivs = document.querySelectorAll('.grid-box')
// allDivs.forEach(div => {
//     div.addEventListener('mouseenter', () => {
//         div.style.backgroundColor = 'blue'
//     })
// })