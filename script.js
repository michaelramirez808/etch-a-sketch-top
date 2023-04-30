const container = document.createElement("div");
container.id = "container";
let isMouseDown = false
let cells = 256;

const grid16 = document.createElement("button");
grid16.id = "grid16";
grid16.classList.add("button")
grid16.textContent = "16x16";
document.body.appendChild(grid16);
grid16.addEventListener("click", function(){
    cells = 16*16;
    createGrid(cells);
});

const grid32 = document.createElement("button");
grid32.id = "grid32";
grid32.classList.add("button")
grid32.textContent = "32x32";
document.body.appendChild(grid32);
grid32.addEventListener("click", function(){
    cells = 32*32;
    createGrid(cells);
});

const grid64 = document.createElement("button");
grid64.id = "grid64";
grid64.classList.add("button")
grid64.textContent = "64x64";
document.body.appendChild(grid64);
grid64.addEventListener("click", function(){
    cells = 64*64;
    createGrid(cells);
});

const buttonsDiv = document.createElement("div");
buttonsDiv.classList.add("buttons-container");
buttonsDiv.appendChild(grid16);
buttonsDiv.appendChild(grid32);
buttonsDiv.appendChild(grid64);
document.body.appendChild(buttonsDiv);

function createGrid(cells) {
    container.innerHTML = '';
    const cellSize = Math.floor(450 / Math.sqrt(cells)); // calculate cell size based on container size
    container.style.gridTemplateColumns = `repeat(${Math.sqrt(cells)}, ${cellSize}px)`;
    container.style.gridTemplateRows = `repeat(${Math.sqrt(cells)}, ${cellSize}px)`;
    for (let i =1; i <=cells; i++){
        const div = document.createElement("div");
        div.classList.add("cell");
        div.style.width = `${cellSize}px`;
        div.style.height = `${cellSize}px`;
        container.appendChild(div);

        div.addEventListener("mousedown", function(){
            isMouseDown = true;
            div.style.backgroundColor = "black";
        });

        div.addEventListener("mouseover", function(){
            if(isMouseDown){
                div.style.backgroundColor = "black";
            }
        });

        div.addEventListener("mouseup", function(){
            isMouseDown = false;
        });
    }
}

createGrid(cells);
document.body.appendChild(container);
