let titulojs = document.getElementById("titulojs");

let logos = document.getElementsByClassName("logo__porte");

let mainjs=document.getElementById("mainjs");

let montoApuesta=document.getElementById("montoApuesta");

let acMilan = document.getElementById("acMilan");

let pSG = document.getElementById("pSG");

let inter = document.getElementById("inter");

let realMadrid = document.getElementById("realMadrid");

let barcelona = document.getElementById("barcelona");

let bayerMunich = document.getElementById("bayerMunich");

let manCity = document.getElementById("manCity");

let chelsea = document.getElementById("chelsea");

mainjs.style.background="red";

titulojs.innerText="Apuesta Champion League";

limpiar.onclick = () =>{
montoApuesta.reset
}
/* 
let edad = prompt("Ingrese su edad");
if (edad >= 18){
    console.log("Bienvenido!");
}
else {
    console.log("Pide ayuda a un adulto y continua.")
}
let usuario;
let contrasenia;
for (let i=1;i<=2;i++){
    usuario=prompt("Ingresa usuario");
    contrasenia=prompt("Ingresa contraseña para "+usuario);
    
    if((usuario=="Lucas")&&(contrasenia=="Rodriguez")){
        console.log("Bienvenido al sistema!");
        break;
    }else{
        console.log("Usuario y/o contraseña erroneos! Restan "+(2-i)+" intentos");
    }
} */
const equipos = [
    {
        id:1,
        nombre:"AC Milan",
        liga:"Serie A",
        multiplicador:"8"
    },
    {
        id:2,
        nombre:"Paris Saint Germain",
        liga:"Ligue 1",
        multiplicador:"2.8"
    },
    {
        id:3,
        nombre:"Inter",
        liga:"Serie A",
        multiplicador:"9.3"
    },
    {
        id:4,
        nombre:"Real Madrid",
        liga:"Liga Santander",
        multiplicador:"5"
    },
    {
        id:5,
        nombre:"Barcelona",
        liga:"Serie A",
        multiplicador:"11.5"
    },
    {
        id:6,
        nombre:"Bayern Munich",
        liga:"Bundesliga",
        multiplicador:3.5
    },
    {
        id:7,
        nombre:"Manchester city",
        liga:"Premier League",
        multiplicador:"3"
    },
    {
        id:8,
        nombre:"Chelsea",
        liga:"Premier League",
        multiplicador:"6.7"
    },
];
/* let equipoElegido = prompt("Elige tu equipo");
const equipoSel = equipos.find((equipo) => equipo.nombre == equipoElegido);
if (equipoSel != undefined){
    console.table(equipoSel);
}else{
    console.log("Ese equipo no está en champions league");
}
let apuesta=parseFloat(prompt("Ingresa apuesta"));
function calcularGanancia(apuesta){
    return apuesta * equipoSel.multiplicador;
}
let ganancia = calcularGanancia(apuesta);
console.log("Si el equipo gana su ganancia es $"+ganancia);
function mostrarSaldoFinal(apuesta,ganancia){
    console.log("Si el equipo gana su saldo será $"+ (apuesta + ganancia));
}
mostrarSaldoFinal(apuesta,ganancia); */