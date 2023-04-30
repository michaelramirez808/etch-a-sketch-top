const container = document.createElement("div");
container.id = "container";
let isMouseDown = false
let cells;
container.style.gridTemplateColumns = "repeat(16, 1fr)";


for (let i =1; i <=256; i++){
    const div = document.createElement("div");
    div.classList.add("cell");
    container.appendChild(div);
    

    div.addEventListener("mousedown", function(){
        isMouseDown = true;
        div.style.backgroundColor = "black";
    });

    div.addEventListener("mouseover", function(){
        if(isMouseDown){
            div.style.backgroundColor = "black";
        }
    })

    container.appendChild(div);

    div.addEventListener("mouseup", function(){
        isMouseDown = false;
    })

}

document.body.appendChild(container);

const grid16 = document.createElement("button");
grid16.id = "grid16";
grid16.classList.add("button")
grid16.textContent = "16x16";
document.body.appendChild(grid16);

const grid32 = document.createElement("button");
grid32.id = "grid32";
grid32.classList.add("button")
grid32.textContent = "32x32";
document.body.appendChild(grid32);

const grid64 = document.createElement("button");
grid64.id = "grid64";
grid64.classList.add("button")
grid64.textContent = "64x64";
document.body.appendChild(grid64);

const buttonsDiv = document.createElement("div");
buttonsDiv.classList.add("buttons-container");
buttonsDiv.appendChild(grid16);
buttonsDiv.appendChild(grid32);
buttonsDiv.appendChild(grid64);
document.body.appendChild(buttonsDiv);