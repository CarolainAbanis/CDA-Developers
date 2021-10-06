import react, { Container } from 'react';
import { Navbar } from 'react-bootstrap';
import './App.css';




function App() {
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
        window.alert("Su producto ha sido eliminado con éxito")
    }

    return (
        <><meta name="viewport" content="width=device-width, initial-scale=1.0" /><>
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div class="search-btn" id="search-btn">
                <form class="buscar" action="action_page.php">
                    <label class="labelBuscar" for="Buscar por">Buscar por: </label>
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
                    <input type="text" class="form-control" placeholder="Buscar..." aria-label="Input group example" aria-describedby="basic-addon1" />

                    <button className="btn-buscar" type="submit"> Buscar</button>

                </form>
            </div>
            <div className="table">
                <table>
                    <tr>
                        <th>ID Producto </th>
                        <th>Descripción</th>
                        <th>Valor Unitario</th>
                        <th>Estado</th>
                        <th>Fecha de registro</th>
                    </tr>
                    <tr>
                        <td>12345</td>
                        <td contenteditable="true">Camisa</td>
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
                        <td contenteditable="true">Pantalón</td>
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

            </div>
            <div>
                <button className="button1" onClick={actualizar} type="submit"> Actualizar</button>
                <button className="button1" onClick={guardar} type="submit"> Guardar</button>
                <button className="button1" onClick={eliminar} type="submit"> Eliminar</button>
            </div>
        </></>


    )
}

export default App;
