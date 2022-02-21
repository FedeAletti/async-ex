// inicializamos con un array vacío
let productos = []

// Contenedor de productos donde se renderizan
let contenedorProductos = document.getElementById("tienda")

// Plantilla para cada objeto productos
class Producto {
	constructor(id, nombre, precio, imagen, stock) {
		this.id = id
		this.nombre = nombre
		this.precio = precio
		this.imagen = imagen
		this.stock = stock
	}

	comprar() {
		alert(`Has comprado ${this.nombre} por $${this.precio}! 🤑💸`)
	}
}

// Base de datos
const BD = [
	new Producto(
		1,
		"Remera",
		Math.floor(Math.random() * 25) * 75 + 300,
		"https://ae01.alicdn.com/kf/H3c52791bd1924c4c842e68faa8f0aa38h/While-Alive-Programmer-T-shirt-Live-Eat-Code-Eat-Sleep-Simple-Letter-Design-Geek-Coder-Tshirt.jpg",
		Math.floor(Math.random() * 25) + 1
	),
	new Producto(
		2,
		"Remera",
		Math.floor(Math.random() * 25) * 75 + 300,
		"https://res.cloudinary.com/teepublic/image/private/s--96CF_t33--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_-47/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-395,y_-372/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1516826478/production/designs/2305884_0.jpg",
		Math.floor(Math.random() * 25) + 1
	),
	new Producto(
		3,
		"Remera",
		Math.floor(Math.random() * 25) * 75 + 300,
		"https://ih1.redbubble.net/image.674618109.8953/ssrco,slim_fit_t_shirt,mens,101010:01c5ca27c6,front,square_product,600x600.u2.jpg",
		Math.floor(Math.random() * 25) + 1
	),
	new Producto(
		4,
		"Remera",
		Math.floor(Math.random() * 25) * 75 + 300,
		"https://ih1.redbubble.net/image.458909738.1995/ssrco,classic_tee,womens,322e3f:696a94a5d4,front_alt,square_product,600x600.u2.jpg",
		Math.floor(Math.random() * 25) + 1
	),
	new Producto(
		5,
		"Remera",
		Math.floor(Math.random() * 25) * 75 + 300,
		"https://m.media-amazon.com/images/I/A1ntnF3PJOL._CLa%7C2140%2C2000%7C712LP3s7e2L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png",
		Math.floor(Math.random() * 25) + 1
	),
	new Producto(
		6,
		"Remera",
		Math.floor(Math.random() * 25) * 75 + 300,
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_cYxBQ4i9pyv4oPQgxZPFRH2m3EKZhdgvoA&usqp=CAU",
		Math.floor(Math.random() * 25) + 1
	),
]

/* -------------------------------- FUNCIONES ------------------------------- */

// Promesa para obtener productos
const pedirProductos = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			contenedorProductos.addEventListener("click", comprarProducto)
			resolve(BD)
		}, 3000)
	})
}

// Render productos
const mostrarProductos = (productos) => {
	let acumulador = ""

	productos.forEach((producto) => {
		const { id, nombre, precio, imagen, stock } = producto

		acumulador += `
            <div class="col-md-4 py-3"> 
                <div class="card">
                    <img src="${imagen}" class="card-img-top" alt="${nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="card-text">💲${precio}</p>
                        <p class="card-text"><small class="text-muted">Quedan solo ${stock} unidades</small></p>
                        <button id="${id}" class="agregar-cart">Comprar</button>
                    </div>
                </div>
            </div>
        `
	})

	contenedorProductos.innerHTML = acumulador
}

// Capturando la compra
const comprarProducto = (e) => {
	const id = e.target.id
	if (id != "") {
		const producto = BD.find((p) => p.id == id)
		producto.comprar()
		// Aquí se debería de guardar el array de productos en localStorage
	}
}

/* -------------------------------- EJECUCION ------------------------------- */

// Llamado a la función con la promesa
pedirProductos()
	.then((res) => {
		productos = res
		mostrarProductos(productos)
	})
	.catch(() => {
		contenedorProductos.innerHTML = `
			<div class="col-md-12">
				<h1 class="text-center">Error al cargar los productos</h1>
			</div>
		`
	})
