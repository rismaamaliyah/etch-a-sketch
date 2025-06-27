// Global variables
const container = document.getElementById('container');
let gridSize = 16;

// Create the grid
function createGrid(size) {
    container.innerHTML = '';

    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
            // square.style.backgroundColor = 'black';
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

        container.appendChild(square);
    }
}

createGrid(gridSize);

// Button to change the grid
const gridSizeBtn = document.getElementById('grid-size-btn');

gridSizeBtn.addEventListener('click', () => {
    let newSize = prompt('Enter number of squares per side (max 100): ', 16);

    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }

    gridSize = newSize;
    createGrid(gridSize);
})