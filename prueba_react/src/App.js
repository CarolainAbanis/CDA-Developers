import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
import './App2.css';
import './App3.css';
import BarraNavegacion from './Componentes/BarraNavegacion';
import { ListaProductos } from './Componentes/ListaProductos';
import ProductosForm from './Componentes/ProductosForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.PRODUCTOS_URL = 'http://localhost:5000/RegistroProductos';
    this.productoVacio = { _id: -1, idproducto: '', descripcion: '', valorunitario: '', estado: '', fecharegistro: '' };
    //los dos atributos de mi estado, la lista de productos y el producto selecionado
    this.state = {
      productos: [],
      productoSeleccionado: this.productoVacio
    };
    this.onFormChange = this.onFormChange.bind(this);
    this.onEditProductos = this.onEditProductos.bind(this);
    this.onDeleteProductos = this.onDeleteProductos.bind(this);
    this.onClearProductos = this.onClearProductos.bind(this);
    this.onSaveProductos = this.onSaveProductos.bind(this);


  }
  //usamos metodos de ciclo de vida de react, nos conectamos al backend
  componentDidMount() {
    const URL = 'http://localhost:5000'
    axios.get(URL + '/RegistroProductos').then((resp) => {
      console.log('esta es la respuesta de listar productos', resp);
      this.setState({ productos: resp.data }) //muestro el data en la tabla 
    }).catch(err => {
      console.log('hubo un error listando productos', err);
    });
  }



  //editar producto seleccionado
  onEditProductos(productos) {

    console.log('quiero editar un producto', productos);
    this.setState({ productoSeleccionado: productos });
    //muestra alerta cuando se guarde un registro
    swal({
      title: "Editar",
      text: "vas a editar un registro",
      icon: "warning",
      button: "Aceptar"
    });
  }

  onFormChange(estadoActualProducto) {
    console.log('cambio el formulario', estadoActualProducto);
    this.setState({ productoSeleccionado: estadoActualProducto });

  }


  //eliminar producto seleccionado
  onDeleteProductos(idproducto) {
    //muestra alerta cuando se guarde un registro
    swal({
      title: "ELIMINAR",
      text: "vas a eliminar un registro",
      icon: "warning",
      button: "Aceptar"
    });
    console.log('quiero eliminar un producto', idproducto);
  }

  //limpiar el formulario
  onClearProductos() {
    console.log('vamos a limpiar el formulario');
    this.setState({ productoSeleccionado: this.productoVacio });
  }

  //funcion para guardar productos
  onSaveProductos(event) {
    event.preventDefault();
    //valido que los campos no esten vacios 
    const pdt = this.state.productoSeleccionado;
    if (pdt.idproducto === '' || pdt.descripcion === ''
      || pdt.valorunitario === '' || pdt.estado === ''
      || pdt.fecharegistro === '') {
      swal({
        title: "DATOS ERRONEOS",
        text: "Verifica el formulario",
        icon: "warning",
        button: "Aceptar"
      });
      return;
    }

    //si el _id es -1, se va a crear un registro nuevo, de lo contrario se actualiza un registro
    if (this.state.productoSeleccionado._id === -1) {
      console.log('vamos a crear POST producto', this.state.productoSeleccionado);
      axios.post(this.PRODUCTOS_URL, { ...pdt, _id: null }).then((resp) => {
        console.log('todo bien con el post', resp);
        swal({
          title: "REGISTRO GUARDADO CON EXITO",
          icon: "success",
          button: "Aceptar"
        });
      }).catch(err => {
        console.log('error en el post', err);
      });

    } else {
      console.log('vamos a actualizar PUT producto', this.state.productoSeleccionado);
    }

  }

  render() {
    return (
      <div>
        <BarraNavegacion/>

        <ProductosForm
          productos={this.state.productoSeleccionado}
          onFormChange={this.onFormChange}
          onClearProductos={this.onClearProductos}
          onSaveProductos={this.onSaveProductos}
        />

        <ListaProductos
          productos={this.state.productos}
          onEditProductos={this.onEditProductos}
          onDeleteProductos={this.onDeleteProductos} />

      </div>
    );
  }
}

/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.onformSubmitted = this.onFormSubmitted.bind(this);
    this.state = {
      productos: [
        { idproducto: 123, descripcion: 'bolso', valorunitario: 5000, estado: 'disponible', fecharegistro: '21/03/2010' },
        { idproducto: 345, descripcion: 'cartera', valorunitario: 10000, estado: 'no disponible', fecharegistro: '21/03/2010' }
      ], 
      productoSeleccionado: null
    }
  }
  onFormSubmitted(event){
    event.preventDefault();
    console.log('formSubmitted ', event);
  }

  render() {
    return (
      <div>
      
        <ProductosForm onFormSubmit={this.onFormSubmitted} />
        <ListaProductos productos={this.state.productos} />
      </div>

    );
  }
}

*/
export default App;
