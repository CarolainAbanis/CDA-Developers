import Menu from './Menu';
import Tabla from './Tabla';
import Botones from './Botones';
import './App.css';
import React from 'react';



class App extends React.Component{





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
  
