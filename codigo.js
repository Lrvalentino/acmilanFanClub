/* const equipos = [
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
]; */


const productos = [
    {
        id:1,
        nombre:"Polera Milan",
        precio:40000,
        foto: "http://127.0.0.1:5500/resources/polera%20milan.png"
    },
    {
        id:2,
        nombre:"Short Milan",
        precio:20000,
        foto: "http://127.0.0.1:5500/resources/short%20milan.jpg"
    },
    {
        id:3,
        nombre:"Medias Milan",
        precio:10000,
        foto: "http://127.0.0.1:5500/resources/medias%20milan.jpg"
    },
    {
        id:4,
        nombre:"Gorro Milan",
        precio:12000,
        foto: "http://127.0.0.1:5500/resources/gorro%20milan.jpg"
    },
];


let titulojs = document.getElementById("titulojs");

let logos = document.getElementsByClassName("logo__porte");

let mainjs=document.getElementById("mainjs");

mainjs.style.background="red";

titulojs.innerText="Tienda";

const carrito = [];
let contenedor = document.getElementById("misprods");

function creandoProductos(){
    for(const producto of productos){
        contenedor.innerHTML += `
            <div class="card col-sm-2">
                <img src=${producto.foto} class="card-img-top" alt="producto">
                <div class="card-body">
                    <h5 class="card-title">${producto.id}</h5>
                    <p class="card-text">${producto.nombre}</p>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id='btn${producto.id}' class="btn btn-primary">Comprar</button>
                </div>
            </div>   
        `;
    }
    productos.forEach((producto)=>{
        //evento para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            agregarAlCarrito(producto);
        });
    });
}

creandoProductos();

function agregarAlCarrito(productoAComprar){
    carrito.push(productoAComprar);
    console.table(carrito);
    alert("Producto "+productoAComprar.nombre+" agregado al carro!");
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${productoAComprar.id}</td>
            <td>${productoAComprar.nombre}</td>
            <td>${productoAComprar.precio}</td>
        </tr>
    `;
    let totalCarrito = carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0);
    document.getElementById("total").innerText = "Total a pagar $: "+totalCarrito;
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