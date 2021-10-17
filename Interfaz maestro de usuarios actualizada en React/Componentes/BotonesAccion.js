import React, { Component } from 'react'

export default class BotonesAccion extends Component {
    render() {
        return (
            <div className="botonesAbajo">
                <button onClick="guardarCambio()" type="submit" className="boton">
                    <span className="botonTexto">Guardar</span>
                </button>
            </div>
        )
    }
}
