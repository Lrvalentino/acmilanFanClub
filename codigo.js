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
}
const equipos = [
    {
        id:1,
        nombre:"AC Milan",
        liga:"Serie A",
        multiplicador:"8"
    },
    {
        id:2,
        nombre:"juventus",
        liga:"Serie A",
        multiplicador:"10.2"
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
        id:1,
        nombre:"Bayern Munhen",
        liga:"Bundesliga",
        multiplicador:3.5
    },
    {
        id:1,
        nombre:"Manchester city",
        liga:"Premier League",
        multiplicador:"3"
    },
    {
        id:1,
        nombre:"Chelsea",
        liga:"Premier League",
        multiplicador:"6.7"
    },
    {
        id:1,
        nombre:"Paris Saint Germain",
        liga:"Ligue 1",
        multiplicador:"2.8"
    }
];
//find
//busca el primer elemento que cumpla con la condicion solicitada
let equipoElegido = prompt("Elige tu equipo");
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
mostrarSaldoFinal(apuesta,ganancia);