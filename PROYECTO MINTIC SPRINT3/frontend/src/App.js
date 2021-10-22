import react from 'react';
import Menu from './Components/Menu';
import Tabla from './Components/Tabla';
import Combobox from './Components/Combobox';
//import {Menu} from './Components/Menu'
// import Table from '/Components/Table';
import './App.css';


function App(){
    return (
        <>
        <Menu />
        <Combobox/>
        <Tabla />      
        </>
          
    )
}

export default App;
