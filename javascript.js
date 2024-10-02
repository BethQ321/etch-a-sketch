let length;
const grid = document.querySelector("#container");

const setLengthButton = document.querySelector("#popUp");
setLengthButton.addEventListener("click", () => {
    length = parseInt(prompt("To set the length of the grid, choose a number between 1 and 100.", ""));
    grid.innerHTML = "";
    while(typeof length != "number" || length <=0 || length > 100) {
        length = parseInt(prompt("Not a valid input. Pick a number between 1 and 100.", ""));
    }
    createGrid(length);
});



function createGrid(inputLength) {
    for(let i = 0; i < inputLength; i++) {
        const gridColumn = document.createElement("div");
        gridColumn.classList.add("gridColumn");
        for(let j = 0; j < inputLength; j++) {
            const gridRow = document.createElement("span");
            gridRow.classList.add("gridRow");
            const spanSize = 960/inputLength;
            gridRow.style.height = `${spanSize}px`;
            gridRow.style.width = `${spanSize}px`;
            let opacity = 1;
            gridRow.addEventListener("mouseover", () => {
                opacity = opacity - .1;
                gridRow.style.backgroundColor = `rgba(54, 117, 136, ${opacity})`
            })
            gridColumn.appendChild(gridRow);
        };
        grid.appendChild(gridColumn);
    }
};

// createGrid(8);

//For loop below creates an 8 x 8 grid with a random color produced upon mouse over.
// for(let i = 0; i < length; i++) {
//     const gridColumn = document.createElement("div");
//     gridColumn.classList.add("gridColumn");
//     for(let j = 0; j < length; j++) {
//         const gridRow = document.createElement("span");
//         gridRow.classList.add("gridRow");
//         gridRow.addEventListener("mouseover", () => {
//             const randomColor = Math.floor(Math.random()*16777215).toString(16);
//             gridRow.style.backgroundColor = "#" + randomColor;
//         })
//         gridColumn.appendChild(gridRow);
//     };
//     grid.appendChild(gridColumn);
// }
