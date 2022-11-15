localStorage.setItem("equipo","acMilan")
localStorage.setItem("anio", "2022")
localStorage.setItem("curso","javascript")
localStorage.setItem("aprobado", true)

const productos = [
    {
        id:1,
        nombre:"Polera Milan",
        precio:40000,
        foto: "https://cf.shopee.cl/file/bda0fe6d850b27acb5a6e8d9f1fb08c3"
    },
    {
        id:2,
        nombre:"Short Milan",
        precio:20000,
        foto: "https://i.ebayimg.com/thumbs/images/g/h2EAAOSwkvRgKAU9/s-l300.jpg"
    },
    {
        id:3,
        nombre:"Medias Milan",
        precio:10000,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLnh_8GYiKEQYdPxeDEfnShA9et60ozlc-E65sh2HpV1kxrDHNIYBF0E-8eNAu7yQr6yI&usqp=CAU"
    },
    {
        id:4,
        nombre:"Gorro Milan",
        precio:12000,
        foto: "https://http2.mlstatic.com/D_NQ_NP_958436-MLC48692862156_122021-O.jpg"
    },
    {
        id:5,
        nombre:"Chaqueta Milan",
        precio:60000,
        foto: "https://www.tradeinn.com/f/13718/137184895_2/puma-chaqueta-ac-milan-stadium-international-19-20.jpg"
    },
    {
        id:6,
        nombre:"Buzo Milan",
        precio:25000,
        foto: "https://cf.shopee.cl/file/4c7e3d1b046ed82b9d9842c9713bf7d0"
    },
];


let titulojs = document.getElementById("titulojs");

let logos = document.getElementsByClassName("logo__porte");

let mainjs = document.getElementById("mainjs");

let irAPagar = document.getElementById("comprarYa")

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
/*     alert("Producto "+productoAComprar.nombre+" agregado al carro!"); */
    swal("Completa", ("Producto "+productoAComprar.nombre+" ha sido agregado al carro!"), "success");
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
        this.nombre  = obj.nombre.toUpperCase();
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

    console.log(almacenados)

for (const producto of productos2)
    producto.sumaIva();

    console.table(productos2)

    irAPagar.onclick = () => {
        if(carrito.length==0){
            swal("Error", "Debes agregar un producto al carro!", "error");
        }else{
            carrito2 = [];
            document.getElementById("tablabody").innerHTML="";
            let infoTotal = document.getElementById("total");
            infoTotal.innerText="Total a pagar $: ";
            swal("Listo!", "Tu compra ha sido recibida, pronto recibiras un mail de confirmación!", "success");}
        }
        fetch('https://mindicador.cl/api').then(function(response) {
    return response.json();
}).then(function(dailyIndicators) {
    document.getElementById("UF").innerHTML = 'Valor UF $' + dailyIndicators.uf.valor;
    document.getElementById("DolarO").innerHTML = 'El valor actual del Dólar observado es $' + dailyIndicators.dolar.valor;
}).catch(function(error) {
    console.log('Requestfailed', error);
});