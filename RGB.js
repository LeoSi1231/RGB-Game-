const numCuadrados = 6
let colores = generarColoresRandom(numCuadrados)
let colorDisplay = document.querySelector("#colorDisplay")
let cuadrados = document.querySelectorAll(".cuadrados")
let BtnReiniciar = document.querySelector("#reiniciar")
let BtnConteiner = document.querySelector("#container")
let ColorGanadore;
let messageDisplay = document.querySelector("#mensaje")

function ColoresRandom() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function generarColoresRandom(numCuadrados) {
    let array = [];
    for (let i = 0; i < numCuadrados; i++) {
        array.push(ColoresRandom());
    }
    return array;
}

let ColorClickeado

for (let i = 0; i < colores.length; i++) {
    cuadrados[i].style.backgroundColor = colores[i];
    cuadrados[i].addEventListener("click", function () {
        ColorClickeado = cuadrados[i].style.backgroundColor
        if (ColorClickeado === ColorGanadore) {
            messageDisplay.textContent = "¡Correcto!";
            CambiarColor(ColorClickeado);
        } 
        
         else {
            this.style.backgroundColor = 
            messageDisplay.textContent = "Intenta de nuevo";
            cuadrados[i].style.backgroundColor = "#232323"
        }
    }
)}

function reiniciar() {
    colores = generarColoresRandom(numCuadrados)
    ColorGanadore = ColorGanador()
    colorDisplay.textContent = ColorGanadore

    for (let i = 0; i < cuadrados.length; i++) {
        if (colores[i]) {
            cuadrados[i].style.display = 'colorDisplay';
            cuadrados[i].style.backgroundColor = colores[i];
        } else {
            cuadrados[i].style.display = 'none';
        }}
}

BtnReiniciar.addEventListener("click",function(){
    reiniciar()
})

function CambiarColor(color) {
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = color;
    }
}

function ColorGanador() {
    var randomIndex = Math.floor(Math.random() * colores.length);
    return colores[randomIndex];
}
reiniciar()
