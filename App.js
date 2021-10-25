import Menu from './menu';
import Botones from './botones';
import Tabla from './tabla';
import './App.css';
import React from 'react';



class App extends React.Component{
  constructor(props) {
    super(props);
    const usuarioVacio = { cc: '', nombre: '', vendedor: '' };
    const initUsuarios = [
      { id: '00001', nombre: 'Nombre', vendedor: 'vendedor 1'},
      { id: '00002', nombre: 'Nombre', vendedor: 'vendedor 2'}
    ];
    this.state = {
    usuarios: initUsuarios, 
    };
    this.cambioEnUsuarios = this.cambioEnUsuarios.bind(this);
  }


cambioEnUsuarios(){
  console.log('Hay cambios en los usuarios');
}

render(){
    return (
      <div >
        
        <Menu/>
        <Botones/>
        <Tabla/>
     
      </div>
    );
  }
  
}

export default App;
