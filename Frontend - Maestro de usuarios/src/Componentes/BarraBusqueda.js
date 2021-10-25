import React, { Component } from 'react'

export default class BarraBusqueda extends Component {
    render() {
        return (
            <div className="busquedaUsuario">
            <form action="/action_page.php">
                <input type="text" placeholder="Busqueda Usuario" name="usuario"/>
            </form>
            <button type="submit" className="boton">
                <span className="boton_texto">Ver usuario</span>
                <span className="boton_iconoBusqueda">
                <ion-icon name="search"></ion-icon>
                </span>
            </button>
        </div>
        )
    }
}
