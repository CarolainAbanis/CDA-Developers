import './App.css';
import React from 'react';
import {Navbar} from 'react-bootstrap';
import axios from 'axios';

import BarraNavegacion from "./Componentes/BarraNavegacion";
import BarraBusqueda from './Componentes/BarraBusqueda';
import TablaListaDeUsuarios from './Componentes/TablaListaDeUsuarios';
import BotonesAccion from './Componentes/BotonesAccion'
import TablaEdicionDeUsuarios from './Componentes/TablaEdicionUsuarios';

class App extends React.Component{
  constructor(props) {
    super(props);
    const usuarioVacio = { id: '', nombre: '', correo: '' };
    const initUsuarios = [
      { id: '00001', nombre: 'Usuario Prueba 1', correo: 'Correoprueba1', rol: 'Administrador', estado: 'Pendiente' },
      { id: '00002', nombre: 'Usuario Prueba 2', correo: 'Correoprueba2', rol: 'Administrador', estado: 'Pendiente' }
    ];
    this.state = {
    usuarios: initUsuarios, /* El const initUsuarios lo puedo borrar cuando tenga configurado el backend, y el initusuarios aqui lo puedo cambiar por una lista vacia*/
    usuariosSeleccionados: usuarioVacio
    };
    this.cambioEnUsuarios = this.cambioEnUsuarios.bind(this);
  }

  componentDidMount(){
    const URL = 'http://localhost:5000';
    axios.get(URL + './usuarios').then((resp)=>{
      console.log('Esta es la respuesta de listar usuarios',resp);
      this.setState({usuarios: resp.data }) /* Esto tambien depende del backend - revisar cuando este configurado*/
    }).catch(err =>{
      console.log('Hubo un error listando los usuarios', err);
    });
  }

  cambioEnUsuarios(){
    console.log('Hay cambios en los usuarios');
  }

  editarUsuario(usuarioId) {
    console.log('editar un usuario', usuarioId);
  }

  eliminarUsuario(usuarioId) {
    console.log('eliminar un usuario', usuarioId);
    
  }

render(){
  return(
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <BarraNavegacion/>
      <BarraBusqueda/>
      <TablaListaDeUsuarios usuarios={this.state.usuarios} 
      editarUsuario={this.editarUsuario}
      eliminarUsuario={this.eliminarUsuario}
      />
      <BotonesAccion/>
      <TablaEdicionDeUsuarios usuarios={this.state.usuariosSeleccionados} cambioEnUsuarios={this.cambioEnUsuarios}/>
    </div>    
    );
  }
} 

export default App;
