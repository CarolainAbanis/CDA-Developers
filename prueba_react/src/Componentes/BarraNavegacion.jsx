import React, { Component } from 'react'


export default class BarraNavegacion extends Component {
    render() {
        return (
            <div class="topnav" id="myTopnav">
                <a href="#CDA-Developers" class="active">CDA-Developers</a>
                <div class="dropdown">
                    <button class="dropbtn">Ventas
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Ingresar ventas</a>
                        <a href="#">Buscar y actualizar ventas</a>
    
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Productos
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Registrar productos</a>
                        <a href="#">Buscar y actualizar productos</a>
    
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Usuarios
                        <i class="fa fa-caret-down"></i>
                    </button>
                </div>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
            </div>
        )
    }
}
