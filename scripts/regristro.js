class UI {
  constructor (){
    this.tipos = ['Camisas', 'Jeans', 'Zapatos'];
    this.urls = ['http://localhost:4000/camisas', 'http://localhost:4000/pantalones', 'http://localhost:4000/zapatos'];
  }

  validar(){
    /* Validar */

    return true;
  }

  async guardar(){
    const indice = document.getElementById("categorias").selectedIndex;
    const nombre_ = document.getElementById('nombre').value;
    const precio_ = parseFloat(document.getElementById('precio').value);

    const data = await fetch(this.urls[indice], {
      method: 'POST',
      body: JSON.stringify({
        img: 'Default',
        nombre: nombre_,
        precio: precio_,
      }),
      headers:{
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
  }

  async modificar(){
    const indice = document.getElementById("categorias").selectedIndex;
    const nombre_ = document.getElementById('nombre').value;
    const precio_ = parseFloat(document.getElementById('precio').value);
    const id_ = parseInt(document.getElementById('id').value);
    const data = await fetch(`${this.urls[indice]}/${id_}`, {
      method: 'PUT',
      body: JSON.stringify({
        nombre: nombre_,
        precio: precio_,
        id: id_,
      }),
      headers:{
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
  }


  async eliminar(){
    const indice = document.getElementById("categorias").selectedIndex;
    const id = document.getElementById('id').value;
    const data = await fetch(`${this.urls[indice]}/${id}`, {
      method: 'DELETE',
    })
  }
}


/* --------------------  Eventos ------------------*/

document.getElementById('guardar').addEventListener('click', () =>{
  const userInterface = new UI();
  if(userInterface.validar()){
    userInterface.guardar();
  }
});


document.getElementById('modificar').addEventListener('click', () =>{
  const userInterface = new UI();
  if(userInterface.validar()){
    userInterface.modificar();
  }
});

document.getElementById('eliminar').addEventListener('click', () =>{
  const userInterface = new UI();
  if(userInterface.validar()){
    userInterface.eliminar();
  }
});