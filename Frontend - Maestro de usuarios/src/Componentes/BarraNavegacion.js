import React, { Component } from 'react'

export default class BarraNavegacion extends Component {
    render() {
        return (
            <div className="topnav" id="myTopnav">
                <a href="#CDA-Developers" className="active">CDA-Developers</a>
                <div className="dropdown">
                    <button className="dropbtn">Ventas
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Ingresar ventas</a>
                        <a href="#">Buscar y actualizar ventas</a>
    
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Productos
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Registrar productos</a>
                        <a href="#">Buscar y actualizar productos</a>
    
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Usuarios
                        <i className="fa fa-caret-down"></i>
                    </button>
                </div>
                <a href="javascript:void(0);" className="icon" onClick="myFunction()">&#9776;</a>
            </div>
        )
    }
}
