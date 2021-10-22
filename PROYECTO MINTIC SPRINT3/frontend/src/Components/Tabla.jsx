import React from 'react';
import listado from "../Actions/maestroProductosAction"



function Tabla(){
    function actualizar(e) {
        e.preventDefault();
        window.alert("Su producto ha sido actualizado con éxito")
    }

    function guardar(e) {
        e.preventDefault();
        window.alert("Su producto ha sido guardado con éxito")
    }

    function eliminar(e) {
        e.preventDefault();
        listado.maestroProductosAction();
    }

    return(

        <tabla className="table">
                    <table>
                        <tr>
                            <th>ID Producto </th>
                            <th>Descripción</th>
                            <th>'Valor Unitario'</th>
                            <th>Estado</th>
                            <th>Fecha de registro</th>
                        </tr>
                        <tr>
                            <td>12345</td>
                            <td contenteditable="true">producto</td>
                            <td contenteditable="true">1000</td>
                            <td>
                                <select name="Combobox" id="estado1">
                                    <option value="Disponible">Disponible</option>
                                    <option value="No disponible">No disponible</option>
                                </select>
                            </td>
                            <td contenteditable="true">10/10/2021</td>

                        </tr>
                        <tr>
                        <td>12345</td>
                            <td contenteditable="true">producto</td>
                            <td contenteditable="true">2000</td>
                            <td>
                                <select name="Combobox" id="estado2">
                                    <option value="Disponible">Disponible</option>
                                    <option value="No disponible">No disponible</option>
                                </select>
                            </td>
                            <td contenteditable="true">10/10/2021</td>
                        </tr>
                        <tr>
                        <td>12345</td>
                            <td contenteditable="true">Pantalón</td>
                            <td contenteditable="true">4000</td>
                        
                            <td>
                                <select name="Combobox" id="estado2">
                                    <option value="Disponible">Disponible</option>
                                    <option value="No disponible">No disponible</option>
                                </select>
                            </td>
                            <td contenteditable="true">10/10/2021</td>

                        </tr>
                    </table>
         <div>
         <button className="button1" onClick={actualizar} type="submit"> Actualizar</button>
         <button className="button1" onClick={guardar} type="submit"> Guardar</button>
         <button className="button1" onClick={eliminar} type="submit"> Eliminar</button>
     </div>
 </tabla>



)
}

export default Tabla;