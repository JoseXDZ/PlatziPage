let ataqueJugador




function startgame(){
let botonSeleccionar = document.getElementById('boton-seleccionar')
botonSeleccionar.addEventListener('click',SeleccionarEntidadJugador)
 }

let botonTerremoto = document
let botonTsunami
let botonFuego


function SeleccionarEntidadJugador(){
  
  let spanMascotaDelJugador = document.getElementById('Mascota-del-jugador')


    if (document.getElementById("hipodoge").checked == true){
    spanMascotaDelJugador.innerHTML = 'hipodoge'
        alert("Usted ha seleccionado hipodoge")
    }
    else if (document.getElementById("capipepo").checked == true){
        spanMascotaDelJugador.innerHTML = 'capipepo'
        alert("Usted ha seleccionado capipepo")
    }
    else if (document.getElementById("ratigueya").checked == true){
        spanMascotaDelJugador.innerHTML = 'ratigueya'
        alert("Usted ha seleccionado ratigueya")

    }
    else {

        alert("Selecciona una mascota para empezar")
    }
}

function seleccionarMascotaEnemigo(){
let ataqueAleatorio = aleatorio(1,3)
let spanMascotaEnemigo = document.getElementById ('MascotaEnemigo')

if (ataqueAleatorio = 1){
    spanMascotaEnemigo.innerHTML = 'Tartigrado'


}else if (ataqueAleatorio = 2){
    spanMascotaEnemigo.innerHTML = 'Ajolote'


}else {
    spanMascotaEnemigo.innerHTML = 'Pejelagarto'    

}




function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
    
}

   
}
window.addEventListener('load', startgame)

