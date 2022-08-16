const container = document.querySelector('.grid');
const gridSum = 8;

function makegrid(gridSum) {
    for (let i = 0; i < gridSum; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < gridSum; j++) {
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            row.appendChild(gridBox)
        }
        container.appendChild(row)
    }
}
makegrid(gridSum)