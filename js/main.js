/*
Background Gradients From -- 
https://uigradients.com
*/
 //VISTAS
var vistaInicio = document.querySelector("main")
var vistaTablero = document.querySelector("#seccion-tablero");
var vistaAgregar = document.querySelector("#seccion-agregar");
//BOTONES
var btnIniciar = document.querySelector("#btn-iniciar");
var btnAgregar = document.querySelector("#btn-agregar");
var btnNueva = document.querySelector(".btn-nueva-palabra");
var btnRendirse = document.querySelector(".btn-rendirse");
var btnGuardar = document.querySelector("#btn-guardar");
var btnCancelar = document.querySelector("#btn-cancelar");
var btnEmpezar = document.querySelector(".btn-empezar");
var inputAgregar = document.querySelector("#input-agregar");
var cartelGuardado = document.querySelector("#cartel-guardado");


//FUNCIONES
function visible(vista){
    vista.classList.remove("invisible");
}
function invisible(vista){
    vista.classList.add("invisible");
}

//EVENTO BOTON INICIAR
btnIniciar.addEventListener("click", function(){
    invisible(vistaInicio);
    visible(vistaTablero);
    sortearPalabra(); 
    mostrarGuiones(palabra);
    window.onkeydown = verificarLetra;  
})

//EVENTO NUEVA PALABRA
btnNueva.addEventListener("click", function(){
    tableroLetras.innerHTML = "";
    sortearPalabra(); 
    mostrarGuiones(palabra);
    window.onkeydown = verificarLetra;    
})
//EVENTO BOTON RENDIRSE
btnRendirse.addEventListener("click", function(){
    tableroLetras.innerHTML = "";
    visible(vistaInicio);
    invisible(vistaTablero);
    window.onkeydown = false;
})

//EVENTO BOTON AGREGAR PALABRA
btnAgregar.addEventListener("click", function(){
    invisible(vistaInicio);
    visible(vistaAgregar);
    inputAgregar.focus();
})
//VERIFICACION del INPUT
inputAgregar.addEventListener("input", function(){
    inputAgregar.value = inputAgregar.value.toUpperCase();
    if(/[0-9]/.test(inputAgregar.value) || /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~´]/.test(inputAgregar.value) || /[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]/.test(inputAgregar.value) || /\s/.test(inputAgregar.value)){
        btnGuardar.setAttribute("disabled", "disabled")
        btnGuardar.classList.add("btn-disabled")
    }else{
        btnGuardar.removeAttribute("disabled", "disabled")
        btnGuardar.classList.remove("btn-disabled")
    }
})
//EVENTO BOTON GUARDAR
btnGuardar.addEventListener("click", function(){
    agregarPalabra(inputAgregar.value);
    visible(cartelGuardado);
    setTimeout(function(){
        invisible(cartelGuardado)
    }, 800);
    inputAgregar.value = "";
    inputAgregar.focus();
    
    console.log(palabrasSecretas)
})

//EVENTO BOTON CANCELAR
btnCancelar.addEventListener("click", function(){
    inputAgregar.value = "";
    visible(vistaInicio);
    invisible(vistaAgregar);
})

//EVENTO BOTON EMPEZAR
btnEmpezar.addEventListener("click", function(){
    visible(vistaTablero);
    invisible(vistaAgregar);
    sortearPalabra(); 
    mostrarGuiones(palabra);
    window.onkeydown = verificarLetra;  
})

