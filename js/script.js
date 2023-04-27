let articulos =[
    {
        id: 10,
        nombre: "calcetines",
        tipo: "vestimenta",
        deporte: "senderismo",
        genero: "unisex",
        precio: 6000,
        cantidad: 1,
        img:"https://contents.mediadecathlon.com/p1701392/k$621280fa26d3b67c9b18be99b3420006/calcetines-senderismo-de-nieve-adultos-sh100-cana-media-warm-gris.jpg?format=auto&quality=40&f=200x200"
    },
    {
        id: 11,
        nombre: "mochila",
        tipo: "equipo",
        deporte: "senderismo",
        genero: "unisex",
        precio: 10000,
        cantidad: 1,
        img:"https://contents.mediadecathlon.com/p1805392/k$57f8fdae1c9c57b5a1e51aadec4f993e/mochila-de-senderismo-nh100-10-litros-burdeo.jpg?format=auto&quality=40&f=200x200"
    },
    {
        id: 12,
        nombre: "short",
        tipo: "vestimenta",
        deporte: "tenis",
        genero: "hombre",
        precio: 12000,
        cantidad:1,
        img:"https://contents.mediadecathlon.com/p2454700/k$3044274e5c6f95734aaf630db5f37e18/short-de-tenis-dry-100-blanco-hombre.jpg?format=auto&quality=40&f=452x452"
    },
    {
        id: 13,
        nombre: "balon",
        tipo: "equipo",
        deporte: "futbol",
        genero: "unisex",
        precio: 8000,
        cantidad: 1,
        img:"https://http2.mlstatic.com/D_NQ_NP_782966-MLA52249028475_112022-O.jpg"
    },
    {
        id: 20,
        nombre: "balon",
        tipo: "equipo",
        deporte: "futbol",
        genero: "unisex",
        precio: 8000,
        cantidad:1,
        img:"https://contents.mediadecathlon.com/p2193900/k$91e905b11acd674880d87d3dc45e9ea8/balon-de-futbol-f900-fifa-termosellado-5-blanco.jpg?format=auto&quality=40&f=800x800"
    },
    {
        id: 14,
        nombre: "botas",
        tipo: "vestimenta",
        deporte: "senderismo",
        genero: "mujer",
        precio: 32000,
        cantidad:1,
        img:"https://www.desnivel.com/images/2013/03/x-ultra-mid-gtx-m-green-660x440.jpg"
    },
    {
        id: 15,
        nombre: "pesas",
        tipo: "equipo",
        deporte: "fitness",
        genero: "unisex",
        precio: 40000,
        cantidad:1,
        img:"https://falabella.scene7.com/is/image/Falabella/7988504_1?wid=800&hei=800&qlt=70"
    },
    {
        id: 16,
        nombre: "traje de baño",
        tipo: "equipo",
        deporte: "natacion",
        genero: "mujer",
        precio: 14500,
        cantidad: 1,
        img:"https://samiacl03.akamaized.net/7235-large_default/traje-de-bano-enterito-reductor-azul-marino.jpg"
    },
    {
        id: 17,
        nombre: "calza",
        tipo: "vestimenta",
        deporte: "running",
        genero: "mujer",
        precio: 16000,
        cantidad: 1,
        img:"https://contents.mediadecathlon.com/p2048989/k$6ba654d91454ac2bcb94c1d720004eac/calzas-termicas-leggins-deportivos-running-kalenji-run-warm-mujer-negro.jpg?format=auto&quality=40&f=800x800"
    },
    {
        id: 18,
        nombre: "saco",
        tipo: "equipo",
        deporte: "boxeo",
        precio: 65000,
        genero: "unisex",
        cantidad:1,
        img:"https://contents.mediadecathlon.com/p2218297/k$f0b5e2288b74f4433d2c81a3de1973db/saco-de-boxeo-pb-850-rojo.jpg?format=auto&quality=40&f=800x800"
    },
    {
        id: 19,
        nombre: "chaqueta",
        tipo: "vestimenta",
        deporte: "senderismo",
        genero: "mujer",
        precio: 22000,
        cantidad:1,
        img:"https://contents.mediadecathlon.com/p1714537/k$e9c3346e90b2394dbf1831f3df5f9449/chaqueta-de-polar-senderismo-mujer-mh520-azul.jpg?format=auto&quality=40&f=800x800"
    },
    {
        id: 21,
        nombre: "pesas",
        tipo: "equipo",
        deporte: "fitness",
        genero: "unisex",
        precio: 39000,
        cantidad:1,
        img:"https://http2.mlstatic.com/D_NQ_NP_992797-MLC52285643445_112022-O.webp"
    },
    {
        id: 22,
        nombre:"raqueta",
        tipo: "equipo",
        deporte: "tenis",
        genero: "unisex",
        precio: 45000,
        cantidad:1,
        img: "https://falabella.scene7.com/is/image/Falabella/gsc_113917280_818560_1?wid=1500&hei=1500&qlt=70"
    },
    {
        id: 23,
        nombre:"raqueta",
        tipo: "equipo",
        deporte: "tenis",
        genero: "unisex",
        precio: 42000,
        cantidad:1,
        img: "https://sparta.cl/media/catalog/product/r/a/raqueta_tenis_head_ig_challenge_pro_amarilla-1_1.png?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
    },
    {
        id: 24,
        nombre: "traje de baño",
        tipo: "equipo",
        deporte: "natacion",
        genero: "mujer",
        precio: 22000,
        cantidad:1,
        img:"https://http2.mlstatic.com/D_NQ_NP_2X_715771-CBT54918688677_042023-F.webp"
    }

]

let productos = articulos.map(element =>{
    return new Articulo (element.id, element.nombre, element.tipo, element.deporte, element.genero, element.precio, element.cantidad, element.img)
})

let carrito = []
let carritoContenedor = document.getElementById("carritoContenedor")
let vaciarCarrito = document.getElementById("vaciarCarrito")
let contenedor = document.getElementById("contenedor")
renderizarProductos(productos)
function renderizarProductos(productos){
contenedor.innerHTML=""
    productos.forEach(element => {
        let {id, nombre, tipo, deporte, genero, precio, cantidad, img} = element
        contenedor.innerHTML += `
        <div class="card" style="width: 18rem;">
      <img src="${img}" class="card-img-top mt-2" alt="...">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio: ${precio}</p>
        <p class="card-text">Deporte: ${deporte}</p>
        <p class="card-text">Cantidad: ${cantidad}</p>
        <button onclick= "agregarAlCarrito(${id})" type="button" class="btn btn-primary">AGREGAR AL CARRITO</button>
      </div>
    </div>
        `
    }) 

}

function agregarAlCarrito(id){
    let productoBuscado = productos.find(element => element.id == id)
    //cantidad del mismo articulo
    if (carrito.some(element => element.id === productoBuscado.id)){
        let index = carrito.findIndex(element => element.id === productoBuscado.id)
    carrito[index].cantidad++
    }else{

        carrito.push(productoBuscado)
        lanzarTostify()
        
    }
    mostrarCarrito()

}
//pintar carrito en el DOM
let mostrarCarrito = () =>{
    let modalBody = document.querySelector(".modal .modal-body")
    modalBody.innerHTML=""
    carrito.forEach(element =>{
        let {id, nombre, tipo, deporte, genero, precio, cantidad, img} = element
        modalBody.innerHTML += `
        <div class = "modal-contenedor">
        <div>
        <img class = "img-fluid" src="${img}" />
        </div>

        <div>
        <p>Nombre: ${nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Cantidad: ${cantidad}</p>
        
        </div>


        </div>
        `
      
    })
  
    if (carrito.length == 0) {
        modalBody.innerHTML = `
        <p>Carrito vacio, agrega un producto</p>
        `
    }else{
        console.log("algo")
    } 
    carritoContenedor.textContent = carrito.length  
    

    
}

//vaciar carrito
vaciarCarrito.addEventListener("click", ()=>{
    carrito.length = []
    mostrarCarrito(carrito)
})

//configurar barra buscador
let buscador = document.getElementById("buscador")
buscador.addEventListener("input", filtrar)

function filtrar(){
    
    let arrayFiltradoBuscador = productos.filter(element => element.nombre.includes(buscador.value.toLowerCase())|| element.deporte.includes(buscador.value.toLowerCase()))
    renderizarProductos(arrayFiltradoBuscador)
    console.log(buscador.value)
}

//filtrado de navbar
let allProductos = document.getElementById("allProductos")
let padreCategorias = document.getElementById("padreCategorias")
padreCategorias.addEventListener("click", filtrarCategoria)
function filtrarCategoria(e){
let arrayCategorias = productos.filter(element => element.deporte == e.target.id)
renderizarProductos(arrayCategorias)

}

allProductos.onclick = () =>{
    
    renderizarProductos(productos)
}

// cajas de ingreso
let contenedoraIngreso = document.getElementById("cajaIngreso")
let contenedorPaginaCompra = document.getElementById("padrePagina")
//registro
let usuario = document.getElementById("inputNombre")
let clave = document.getElementById("inputClave")
let registro = document.getElementById("botonRegistro")
registro.addEventListener("click", () =>{
    console.log(usuario.value)
    console.log(clave.value)
    let infoUsuario = {
        usuario: usuario.value,
        clave: clave.value
    }
    localStorage.setItem("infoUsuario", JSON.stringify(infoUsuario))
})
//login
let usuarioLg = document.getElementById("inputNombreLg")
let claveLg = document.getElementById("inputClaveLg")
let botonIngresar = document.getElementById("botonLogin")

botonIngresar.addEventListener("click", () =>{
    let infoUsuario = JSON.parse(localStorage.getItem("infoUsuario"))
    if (infoUsuario.usuario == usuarioLg.value && infoUsuario.clave == claveLg.value) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'BIENVENIDO A NUESTRA TIENDA',
            showConfirmButton: false,
            timer: 1500
          })
        contenedoraIngreso.classList.add("ocultar")
        contenedorPaginaCompra.classList.remove("ocultar") 

    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            position:'center',
            title: 'Datos ingresados incorrectos',
            showConfirmButton: false,
            timer: 1500
          })
    }
})

function lanzarTostify(){
    Toastify({
        text: "Producto agregado",
        className: "info",
        position: "center",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
}





