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
let contenedor = document.getElementById("prods");

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

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarLocal("productosEnVenta", JSON.stringify(productos));

class Producto {
    constructor(obj) {
        this.nombre  = obj.producto.toUpperCase();
        this.precio  = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.19;
    }
}

const almacenados = JSON.parse(localStorage.getItem("productosEnVenta"));
const productos2 = [];

for (const objeto of almacenados)
    productos2.push(new Producto(objeto));

for (const producto of productos2)
    producto.sumaIva();

    console.table(productos2)
