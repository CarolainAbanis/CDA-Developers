
import React from 'react';
import './App2.css';
import './App3.css';
import BarraNavegacion from './Componentes/BarraNavegacion';
import { ListaProductos } from './Componentes/ListaProductos';
import ProductosForm from './Componentes/ProductosForm';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.onformSubmitted = this.onFormSubmitted.bind(this);
    this.state = {
      productos: [
        { idproducto: 123, descripcion: 'bolso', valorunitario: 5000, estado: 'disponible', fecharegistro: '21/03/2010' },
        { idproducto: 345, descripcion: 'cartera', valorunitario: 10000, estado: 'no disponible', fecharegistro: '21/03/2010' }
      ]
    }
  }
  onFormSubmitted(event){
    event.preventDefault();
    console.log('formSubmitted ', event);
  }

  render() {
    return (
      <div>
        <div> <BarraNavegacion/> </div>
        
        <ProductosForm onFormSubmit={this.onFormSubmitted} />
        <ListaProductos productos={this.state.productos} />
      </div>

    );
  }
}


export default App;
