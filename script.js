const container = document.createElement("div");
container.id = "container";
let isMouseDown = false;

for (let i =1; i <=961 ; i++){
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