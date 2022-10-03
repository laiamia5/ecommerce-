//------------------------PRODUCTOS-------------------------------------------------
const cards = [
{producto: "naranja", precio:100, cantidad: 1, descuento : '16% OFF', img:'img/naranja.jpg', categoria: 'fruta', id:1},
{producto: "manzana", precio:100, cantidad: 1, descuento : '16% OFF', img:'img/manzana.jpg', categoria: 'fruta', id:2},
{producto: "banana", precio: 120, cantidad: 1, descuento : '16% OFF', img:'img/banana.jpg', categoria: 'fruta', id:3},
{producto: "durazno", precio:100, cantidad: 1, descuento : '16% OFF', img:'img/naranja.jpg', categoria: 'fruta', id:4},
{producto: "pera", precio:100, cantidad: 1, descuento : '16% OFF', img:'img/pera.jpg', categoria: 'fruta', id:5},
{producto: "frutilla", precio:100, cantidad: 1, descuento : '16% OFF', img:'img/frutilla.jpg', categoria: 'fruta', id:6},
{producto: "pollo", precio:100, cantidad: 1, descuento : '16% OFF', img:'img/Pollo.jpg', categoria: 'carne', id:7},
{producto: "pechito de cerdo", precio:100, cantidad: 1, descuento : '16% OFF', img:'img/Pechitodecerdo.jpg', categoria: 'carne', id:8},
{producto: "milanesa de pollo", precio:100, cantidad: 1, descuento : '16% OFF', img:'img/patitadepollo.jpg', categoria: 'carne', id:9}


];

//CREAR CARDS----------------------------------------------------------------------------

	let divPrincipal = document.getElementsByClassName('div_principal')[0];

	cards.forEach( (element) => {
		let contenedor_cards = document.createElement('div');
		contenedor_cards.className = 'contenedor_cards'
		contenedor_cards.setAttribute("category", element.categoria);
		contenedor_cards.innerHTML = `
			     	<div class="img_contenedor">
			     		<img src="${element.img}" class="img_card">		
			     	</div>
			     	<p>${element.producto}</p>
			     	<strong>$${element.precio}</strong>
			     	 <div class="frame">
		      			<button class="custom-btn btn-2" id="${element.id}">comprar</button>
		  			</div>
				`
			divPrincipal.appendChild(contenedor_cards);
	})

//FILTRAR PRODUCTOS EN EL INPUT---------------------------------------------------------------

let buscador = document.getElementsByClassName("draw")[0];

document.addEventListener( "keyup", (event) => {

	divPrincipal.classList.remove("filtro")
	carritoDom.classList.add("filtro")

	if(event.target.matches(".draw")){

		document.querySelectorAll(".contenedor_cards").forEach( articulo => {

			 articulo.textContent.toLowerCase().includes(event.target.value.toLowerCase())

			   ? articulo.classList.remove("filtro")
			   : articulo.classList.add("filtro")
		})	
	}

})

//CATEGORIAS ICONOS-------------------------------------------------------------------------------

let none = document.getElementsByClassName('categorias_none')[0];
let botonLi = document.getElementsByClassName('categorias')[0];

botonLi.addEventListener('click', () => {
	none.classList.toggle('categorias_none');
})

//CATEGORIAS DISPLAY -------------------------------------------------------------------------
let inicio = document.getElementsByClassName('inicio')[0];
const carne = document.getElementById('carne');
const fruta = document.getElementById('fruta');

carne.addEventListener('click', () => {

	document.querySelectorAll(".contenedor_cards").forEach( articulo => {

		 let categorias =  articulo.getAttribute('category');
		
		if(categorias === 'carne'){
			articulo.classList.remove("filtro")
		}else{
			articulo.classList.add("filtro")
		}
	})		
})

fruta.addEventListener('click', () => {

	document.querySelectorAll(".contenedor_cards").forEach( articulo => {

		 let categorias =  articulo.getAttribute('category');
		
		if(categorias === 'fruta'){
			articulo.classList.remove("filtro")
		}else{
			articulo.classList.add("filtro")
		}
	})		
})

inicio.addEventListener('click', () => {
	document.querySelectorAll(".contenedor_cards").forEach( articulo => {
		articulo.classList.remove("filtro")
		divPrincipal.classList.remove("filtro")
		carritoDom.classList.add("filtro")
	})		
})

// INICIO RESPONSIVE------------------------------------------------

let holaaa = document.getElementById('nav-icon4')

holaaa.addEventListener('click', () => {
	holaaa.addClass('open');
})

// $(document).ready(function(){
// 	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });


//CARRITO-- DOM---------------------------------------------------------

const carrito = []
let texto = document.getElementsByClassName('carrito_vacio')[0]

for(const elemento of cards){

		const btn = document.getElementById(`${elemento.id}`);

		btn.addEventListener("click", () => {
			agregarcarrito(elemento.id)
			carritoDom.removeChild(texto)
		})

		function agregarcarrito(prodId){
		const existe = carrito.some((prod)=> prod.id === prodId)

		if(existe){
			const prod = carrito.map( prod =>{
				if(prod.id === prodId){
					prod.cantidad++
					let posicion = carrito.indexOf(prod)
					console.log(posicion)
					let aumento = document.getElementsByClassName('carrito_cantidad')[posicion]
					let aumento0 = document.getElementsByClassName('carrito_cantidad')[0]
					let posicion0 = carrito[0]
					aumento0.textContent = `${posicion0.cantidad}`
					if(posicion){
						aumento.textContent = `${prod.cantidad}`
					}
				}
			})
		}else{

		const item = cards.find((prod)=> prod.id === prodId)
		carrito.push(item)
		verCarrito(carrito[carrito.length - 1])

		}
	}
		
}

//------------------- CREAR CARD CARRITO-------------------------

let carritoLi = document.getElementsByClassName('carrito')[0];
let carritoDom = document.getElementsByClassName('carritoDom')[0];
let carritobtns = document.getElementsByClassName('carritobtns')[0]

carritoLi.addEventListener('click', () => {
	divPrincipal.classList.add("filtro")
	carritoDom.classList.remove("filtro")
	carritobtns.classList.remove("filtro")
});

const verCarrito = (e) => {

	let cardCarrito = document.createElement("div");

	 	cardCarrito.className = "cardCarrito"
	 	cardCarrito.setAttribute("id", e.id);
		cardCarrito.innerHTML = `
						<p class='carrito_prod'>${e.producto}</p>
						<strong class='carrito_precio'>$${e.precio}</strong>
						<img src="${e.img}" class="carrito_img">	
						<p class="carrito_cantidad">${e.cantidad}</p>
						<button class="carrito_btn"><strong class="menos">-</strong></button>
						
		`
		 carritoDom.appendChild(cardCarrito);

}


//--------------------ELIMINAR UN ELEMENTO DEL CARRITO-------------------------

let btnEliminar = document.getElementsByClassName('carrito_btn')[0]

// btnEliminar.addEventListener("click", () => {
// 	console.log('hola')
// })

//---------------------------VACIAR CARRITO------------------------------------

let vaciar_carrito = document.getElementsByClassName('cardCarrito')[0]
let botonvaciar = document.getElementsByClassName('vaciarCarrito')[0]


botonvaciar.addEventListener('click', () => {
	carrito.splice(0, carrito.length)
	// cardCarrito.classList.add


	console.log(carrito)
	
})

// if(carritoDom === false){
// 	carritoDom.removeChild(cardCarrito)
// }

// function blabla (){
// 	if(carrito.length > 0){
// 		setTimeout( () => {
// 			carritoDom.remove(vaciar_carrito)
// 			console.log(carrito)
// 		}, 100)
// 	}else if(carrito.length === 0){
// 		carritoDom.appendChild(texto)
// 	}
// }

// for(const elemento of carrito){

// 		const shh = document.getElementById(`${elemento.id}`);

// 		shh.addEventListener("click", () => {
// 			agregarcarrito(elemento.id)
// 		})
// }
//--------------------------CARRITO LOCALSTORAGE-----------------------------------


//toastify o sweet alert----------------------------------------------------------

