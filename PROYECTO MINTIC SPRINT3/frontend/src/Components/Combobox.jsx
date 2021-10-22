import React, {useState} from 'react';
import {maestroProductosAction} from "../Actions/maestroProductosAction"



function Combobox(){

    return(
 
 <combobox class="search-btn" id="search-btn">
                    <form class="buscar" action="action_page.php">
                        <label for="Buscar por">Buscar por: </label>
                        <div class="caja">
                        <select name="Buscar por" id="Buscar por">
                            <option value="ID productos">ID productos</option>
                            <option value="Descripcion">Descripción</option>
                            <option value="Todos los productos">Todos los productos</option>
                        </select>
                        </div>
                        <span class="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
    </svg>
                </span>
                <input type="text" class="form-control" placeholder="Buscar..." aria-label="Input group example" aria-describedby="basic-addon1"/>
                        
                        <button className="buscar" type="submit"> Buscar</button>
                        
                    </form>
                </combobox>
    )
}
export default Combobox;  