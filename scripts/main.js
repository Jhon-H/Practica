class UI {
  constructor (){
    this.tipos = ['Camisas', 'Jeans', 'Zapatos'];
    this.urls = ['http://localhost:4000/camisas', 'http://localhost:4000/pantalones', 'http://localhost:4000/zapatos'];
  }

  tipoSeleccionado () {
    const indice = document.getElementById("categorias").selectedIndex;

    if (!indice) alert('Por favor, elija un tipo');
    return (indice ? [this.tipos[indice-1], indice-1] : false);
  }

  async getProducto (url, state = 1) {

    const data = await fetch(url)
      .then(Response => Response.json())
        .then(Response => Response)
      .catch(Reject => { console.log("error") });
  
    this.pintarProductos(data, state);
  }

  pintarProductos (productos, state = 1) {
    const divPintar = document.getElementById('info-productos');
    if(state) divPintar.textContent = "";

    productos.forEach(producto => {
      divPintar.innerHTML +=  `
      <div id="producto">
        <img src=${producto["img"]} alt="imagen productos" />
        <h2> ${producto["nombre"]} </h2>
        <p> Precio: ${producto["precio"]} </p>
      </div>
      `;
    });
  }

  cargarDatos(){
    this.urls.forEach(url =>{ this.getProducto(url, 0) });
  }

  main () {
    const tipo = this.tipoSeleccionado();
    if (tipo) {
      const productos = this.getProducto(this.urls[tipo[1]]);
    }
  }
}


/*------------------ Eventos ---------------------*/
window.addEventListener('DOMContentLoaded', e => {
  const userInterface = new UI();
  userInterface.cargarDatos();
});


document.getElementById('form-filtrar').addEventListener('submit', e => {
  e.preventDefault();

  const userInterface = new UI();
  userInterface.main();
});
