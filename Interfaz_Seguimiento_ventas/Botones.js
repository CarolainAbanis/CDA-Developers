import React from 'react'    

function Botones(){
    function Actualizarventa(e) {
        e.preventDefault();
        window.alert("Su producto ha sido actualizado con éxito")
    }
    function Actualizarventa(_e) {  
        alert("Su venta ha sido actualizada con exito");
    } 
        return (
            <div className="Search_btn">
              <form className="Buscar" action="Action_page.php">

                <label className="labelBuscar" for="Buscar por">Buscar por: </label>
                <div className="caja"></div>
                <select classname="Buscar por" id="Buscar por">
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
             <button className="btn-buscar" type="button"> Buscar</button>
             <div id="Actualizar-venta">
                <input type="button" onclick="Actualizarventa()" value="Actualizar venta"

                />
                
            </div>
            </div>

            </div>
        )
    
}
export default Botones; 

