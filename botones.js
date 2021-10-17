import React, { Component } from 'react'    

export default class Botones extends Component {
    render() {
        return (
            <div className="Search_btn">
              <form className="Buscar" action="Action_page.php">

                <label className="labelBuscar" for="Buscar por">Buscar por: </label>
                <div className="caja"></div>
                <select name="Buscar por" id="Buscar por">
                <option value="ID ventas">ID ventas</option>
                <option value="C.C. Cliente">C.C. Cliente</option>
                <option value="Nombre de cliente">Nombre de cliente</option>
                <option value="Todas las ventas">Todas las ventas</option>
                </select>
                </form>

                <div id="element2">
                <input type="text" className="form-control" placeholder="" aria-label="Input group example" aria-describedby="basic-addon1" />
             </div>

             <div id="btn-buscar">
             <button className="btn-buscar" type="submit"> Buscar</button>
             <div id="Actualizar-venta">
                <input type="button" onclick="Actualizarventa()" value="Actualizar venta"/>
                
            </div>
            </div>

            </div>
        )
    }
}   

