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

let apuesta=parseFloat(prompt("Ingresa apuesta"));

function calcularGanancia(apuesta){
    return apuesta * 2.5;
}

let ganancia = calcularGanancia(apuesta);
console.log("Si el equipo gana su ganancia es $"+ganancia);

function mostrarSaldoFinal(apuesta,ganancia){
    console.log("Si el equipo gana su saldo será $"+ (apuesta + ganancia));
}

mostrarSaldoFinal(apuesta,ganancia);

