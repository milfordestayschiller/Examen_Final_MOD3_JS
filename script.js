//Se identifican los ids y la clase square

var message = document.getElementById("message")
var titulo = document.getElementById("titulo")
var square = document.querySelectorAll(".square");
var valorTexto = document.getElementById("colorDisplay")
var x = Math.floor(Math.random() * 6)
//Se asigna a la variable randomColor
valorTexto.textContent = randomColor()


//Funcion que sirve para recorrer los cuadrados de la posicion 0 a 5 , ademas utiliza la funcion randomColor para hacer las comparaciones correspondientes y que el color aleatorio RGB del h1 sea coincidente con uno de los cuadrados, para posteriormente convierta a todos los demas cuadrados en el color que se selecciono como ganador.


function randomGlobal(valor) {
   for (i = 0; i < square.length; i++) {

      if (square[i].style.backgroundColor = randomColor()) {

         square[x].style.backgroundColor = valorTexto.textContent;
      }

   }
   //Se invoca a la funcion factory donde se hacen las comparaciones de los clicks  de los cuadrados y si es el ganador esta funcion se puede ver al final
   factory2()
}

randomGlobal()

// Funcion para dar el color random en el rgb  en h1
function randomColor() {
   var color1 = Math.floor(Math.random() * 256)
   var color2 = Math.floor(Math.random() * 256)
   var color3 = Math.floor(Math.random() * 256)
   return "rgb(" + color1 + ", " + color2 + ", " + color3 + ")"
}

randomColor()

//Clase easy seleccionada 
var boton = document.querySelector(".easy")
var hidden = document.querySelector("#ultimosTres")
var primerosTres = document.querySelector("#primerosTres")

//Funcion asociada al evento click de la clase easy, se crean y eliminan elementos

boton.addEventListener("click", function (params) {
   playAgain.style = "visibility: hidden !important"
   playAgain2.style = "visibility: hidden"
   titulo.style = "background: #4682b4 !important;"
   reset.style = "visibility: hidden";
   message.textContent = "";
   reset2.style = "visibility: visible !important"
   titulo.style = "background: #232323 !important;";
   hidden.style = "visibility:hidden";
   primerosTres.style = "visibility: visible !important"


   var z = Math.floor(Math.random() * 3)

   valorTexto.textContent = randomColor()

   for (i = 0; i < square.length; i++) {

      if (square[i].style.backgroundColor = randomColor()) {

         square[z].style.backgroundColor = valorTexto.textContent;
         primerosTres.style = "visibility: visible !important"
      }
   }
   factory1()
})


var reset = document.querySelector("#reset")

//Reset que permite la generacion deL BOTON Nuevos colores en fase Hard

reset.addEventListener("click", function (params) {
   playAgain2.style = "visibility: hidden"
   valorTexto.textContent = randomColor()
   var reseteo = Math.floor(Math.random() * 6)
   for (i = 0; i < square.length; i++) {

      if (square[i].style.backgroundColor = randomColor()) {

         square[reseteo].style.backgroundColor = valorTexto.textContent;

      }

   }
   factory2()
})
//Reset que permite la generacion del BOTON nuevos colores en fase Easy

var reset2 = document.querySelector("#reset2")

reset2.addEventListener("click", function () {
   playAgain2.style = "visibility: hidden"
   message.textContent = "";
   titulo.style = "background: #232323"

   valorTexto.textContent = randomColor()

   var z = Math.floor(Math.random() * 3)



   for (i = 0; i < square.length; i++) {

      if (square[i].style.backgroundColor = randomColor()) {

         square[z].style.backgroundColor = valorTexto.textContent;
         primerosTres.style = "visibility: visible !important"
      }


   }
   // Se hace recorrido del div square de la posicion 0 a 2
   factory1()

})

//playAgain permite volver a jugar en modo Hard se hace reload en esta sección y redefine los colores de los cuadrados

var playAgain = document.querySelector("#playAgain")
playAgain.addEventListener("click", function (event) {

   factory2()
   playAgain.style = "visibility: hidden"

   primerosTres.style = "visibility: visible !important"

   var z = Math.floor(Math.random() * 6)

   valorTexto.textContent = randomColor()

   for (i = 0; i < square.length; i++) {

      if (square[i].style.backgroundColor = randomColor()) {

         square[z].style.backgroundColor = valorTexto.textContent;
         primerosTres.style = "visibility: visible !important"
      }
   }

   factory1()
})

//PlayAgain2 correspondiente a boton easy

var playAgain2 = document.querySelector("#playAgain2")
playAgain2.addEventListener("click", function (params) {
   playAgain2.style = "visibility: hidden !important"
   reset.style = "visibility: hidden";
   message.textContent = "";
   reset2.style = "visibility: visible !important"
   titulo.style = "background: #232323 !important;";

   primerosTres.style = "visibility: visible !important"

   var z = Math.floor(Math.random() * 3)

   valorTexto.textContent = randomColor()

   for (i = 0; i < square.length; i++) {

      if (square[i].style.backgroundColor = randomColor()) {

         square[z].style.backgroundColor = valorTexto.textContent;
         primerosTres.style = "visibility: visible !important"
      }


   }

   factory1()

})

//Factorizacion de Codigo factory1 y factory2 , estas funciones se reinvocan en otras funciones necesarias
//factory1 para la Seccion Easy
function factory1(params) {
   var clickedColor0 = square[0].addEventListener("click", function () {
      var message = document.getElementById("message")


      if (valorTexto.textContent == square[0].style.backgroundColor) {
         message.textContent = "Ganaste"
         reset2.style = "visibility: hidden !important"
         titulo.style.backgroundColor = valorTexto.textContent
         playAgain2.style = "visibility: visible !important"
         playAgain.style = "visibility: hidden !important"
         for (i = 0; i < square.length; i++) {
            square[i].style.backgroundColor = valorTexto.textContent
         }
      }
      else {
         message.textContent = "perdiste"
         square[0].style = "background-color:#232323;"
      }

   })
   var clickedColor0 = square[1].addEventListener("click", function () {
      var message = document.getElementById("message")

      if (valorTexto.textContent == square[1].style.backgroundColor) {

         message.textContent = "Ganaste"
         reset2.style = "visibility: hidden !important"
         titulo.style.backgroundColor = valorTexto.textContent
         playAgain2.style = "visibility: visible !important"
         playAgain.style = "visibility: hidden !important"

         for (i = 0; i < square.length; i++) {
            square[i].style.backgroundColor = valorTexto.textContent;

         }
      }
      else {
         message.textContent = "perdiste"
         square[1].style = "background-color:#232323;"
      }


   })
   var clickedColor0 = square[2].addEventListener("click", function () {
      var message = document.getElementById("message")

      if (valorTexto.textContent == square[2].style.backgroundColor) {

         message.textContent = "Ganaste"
         reset2.style = "visibility: hidden !important"
         titulo.style.backgroundColor = valorTexto.textContent
         playAgain2.style = "visibility: visible !important"
         playAgain.style = "visibility: hidden !important"
         for (i = 0; i < square.length; i++) {
            square[i].style.backgroundColor = valorTexto.textContent
         }

      }
      else {
         message.textContent = "perdiste"
         square[2].style = "background-color:#232323;"
      }

   })

   return clickedColor0

}

factory1()

//Factory2 para la seccion Hard, se captura el click por cada indice , si el valor del random es igual al indice del cuadrado con su respectivo color (rgb) entonces gana de lo contrario pierde.
//Esta funcion se invoca en randomGlobal

function factory2(params) {


   var clickedColor0 = square[0].addEventListener("click", function () {
      var message = document.getElementById("message")

      if (valorTexto.textContent == square[0].style.backgroundColor) {
         playAgain.style = "visibility: visible"
         playAgain2.style = "visibility: hidden !important"
         message.textContent = "Ganaste"
         reset.style = "visibility: hidden !important"

         titulo.style.backgroundColor = valorTexto.textContent


         for (i = 0; i < square.length; i++) {
            square[i].style.backgroundColor = valorTexto.textContent
         }

      }
      else {
         message.textContent = "perdiste"
         square[0].style = "background-color:#232323;"
      }

   })
   var clickedColor0 = square[1].addEventListener("click", function () {
      var message = document.getElementById("message")

      if (valorTexto.textContent == square[1].style.backgroundColor) {
         playAgain.style = "visibility: visible"
         playAgain2.style = "visibility: hidden !important"
         message.textContent = "Ganaste"
         reset.style = "visibility: hidden !important"

         titulo.style.backgroundColor = valorTexto.textContent


         for (i = 0; i < square.length; i++) {
            square[i].style.backgroundColor = valorTexto.textContent
         }

      }
      else {
         message.textContent = "perdiste"
         square[1].style = "background-color:#232323;"
      }

   })
   var clickedColor0 = square[2].addEventListener("click", function () {
      var message = document.getElementById("message")

      if (valorTexto.textContent == square[2].style.backgroundColor) {
         playAgain.style = "visibility: visible"
         playAgain2.style = "visibility: hidden !important"
         message.textContent = "Ganaste"
         reset.style = "visibility: hidden !important"

         titulo.style.backgroundColor = valorTexto.textContent


         for (i = 0; i < square.length; i++) {
            square[i].style.backgroundColor = valorTexto.textContent
         }

      }
      else {
         message.textContent = "perdiste"
         square[2].style = "background-color:#232323;"
      }

   })
   var clickedColor0 = square[3].addEventListener("click", function () {
      var message = document.getElementById("message")

      if (valorTexto.textContent == square[3].style.backgroundColor) {
         playAgain.style = "visibility: visible"
         playAgain2.style = "visibility: hidden !important"
         message.textContent = "Ganaste"
         reset.style = "visibility: hidden !important"

         titulo.style.backgroundColor = valorTexto.textContent


         for (i = 0; i < square.length; i++) {
            square[i].style.backgroundColor = valorTexto.textContent
         }

      }
      else {
         message.textContent = "perdiste"
         square[3].style = "background-color:#232323;"
      }

   })
   var clickedColor0 = square[4].addEventListener("click", function () {
      var message = document.getElementById("message")

      if (valorTexto.textContent == square[4].style.backgroundColor) {
         playAgain.style = "visibility: visible"
         playAgain2.style = "visibility: hidden !important"
         message.textContent = "Ganaste"
         reset.style = "visibility: hidden !important"

         titulo.style.backgroundColor = valorTexto.textContent

         for (i = 0; i < square.length; i++) {
            square[i].style.backgroundColor = valorTexto.textContent
         }

      }
      else {
         message.textContent = "perdiste"
         square[4].style = "background-color:#232323;"
      }

   })
   var clickedColor0 = square[5].addEventListener("click", function () {
      var message = document.getElementById("message")

      if (valorTexto.textContent == square[5].style.backgroundColor) {
         playAgain.style = "visibility: visible"
         playAgain2.style = "visibility: hidden !important"
         reset.style = "visibility: hidden !important"
         message.textContent = "Ganaste"

         titulo.style.backgroundColor = valorTexto.textContent

         for (i = 0; i < square.length; i++) {
            square[i].style.backgroundColor = valorTexto.textContent
         }

      }
      else {
         message.textContent = "perdiste"
         square[5].style = "background-color:#232323;"
      }

   })
   return clickedColor0


}

factory2()
