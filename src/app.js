import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  generarCarta();
  document.getElementById("boton").addEventListener("click", generarCarta)
};

function generarCarta() {
  let palos = ["♦", "♥", "♠", "♣"]
  let palosRandom = palos[Math.floor(Math.random() * palos.length)]
  // console.log(palosRandom)
  let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"]
  let numerosRandom = numeros[Math.floor(Math.random() * numeros.length)]
  // console.log(numerosRandom)
  document.getElementById("palo").innerHTML = palosRandom
  document.getElementById("numero").innerHTML = numerosRandom
  document.getElementById("icono").innerHTML = palosRandom
  if (palosRandom == "♥" || palosRandom == "♦") {
    document.getElementById("palo").style.color = "red";
    document.getElementById("icono").style.color = "red";


  } else {
    document.getElementById("palo").style.color = "black";
    document.getElementById("icono").style.color = "black";
  }
}

