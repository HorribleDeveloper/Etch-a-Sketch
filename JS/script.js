const container = document.getElementById('container');
const squares = document.querySelectorAll('.grid-square');
let color = "black";
let click = true;

function generateSquares(size) {
    let amount = size * size - 1
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (i = 0; i <= amount; i++) {
        const divGrid = document.createElement('div');
        divGrid.addEventListener("mouseover", colorSquare)
        divGrid.className = 'grid-square';
        document.getElementById("container").appendChild(divGrid)
    }
}

function changeSize(input) {
    let error = document.querySelector(".error");
    if (input >= 2 && input <= 100) {
        document.querySelector('.error').style.display = 'none';
        generateSquares(input);
    } else {
        error.display = 'flex';
    }

}
generateSquares();

function colorSquare() {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}

function reset() {
    const container = document.getElementById('container');
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach((div) => div.style.backgroundColor = 'grey');
}

document.querySelector("body").addEventListener("click", () => {
    click = !click;
})