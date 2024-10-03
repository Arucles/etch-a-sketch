const container = document.querySelector("#container");
container.setAttribute("style", "display: flex; flex-wrap: wrap; width:1024px; height:1024px;");

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    console.log("rgb("+randomRgbColor.r+" "+randomRgbColor.g+" "+randomRgbColor.b+")")
    console.log(r,g,b);
    return [r,g,b];
}

randomRgbColor().spli;

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.setAttribute("style", "color: blue; background: white; border: black solid 1px; flex: 0 0 64px; height: 64px; margin: 0; padding: 0; box-sizing: border-box;");
  container.appendChild(square);
}

let opacity = 0.1;


const newGridBtn = document.querySelector('#btn-new-grid');
newGridBtn.addEventListener("click", () => {
    
    let newGridSize = parseInt(prompt("Insert new grid size number less than 100", "1"));
    if (newGridSize<100) {
        
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            container.removeChild(square);
        });
        for (let i = 0; i < newGridSize * newGridSize; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("style", "color: blue; background: white; border: black solid 1px; flex: 0 0 "+(1024/newGridSize)+"px; height: "+(1024/newGridSize)+"px; margin: 0; padding: 0; box-sizing: border-box;");
            container.appendChild(square);
        }
        const hoveredSquares = document.querySelectorAll(".square");
        hoveredSquares.forEach((square)=>{
            square.addEventListener("mouseenter", () => {
            let randomColor= randomRgbColor().join(" ");
            square.style.background = "rgb("+randomColor+" / "+opacity+")"; // Change background color on hover
            opacity = opacity + 0.1;
            //square.style.background.opacity = opacity;
        });
            square.addEventListener("mouseleave", () => {
            
            square.style.background = "white"; // Revert background color when not hovering
            });
        });
    }
});





const hoveredSquares = document.querySelectorAll(".square");
hoveredSquares.forEach((square)=>{
    square.addEventListener("mouseenter", () => {
    square.style.background = "black"; // Change background color on hover
  });

  square.addEventListener("mouseleave", () => {
    square.style.background = "white"; // Revert background color when not hovering
  });
});



