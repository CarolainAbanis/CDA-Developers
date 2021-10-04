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
        <><div class="topnav" id="myTopnav">
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
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    
                </div>
            </div>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
        </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div class="search-btn" id="search-btn">
                <form class="buscar" action="action_page.php">
                    <label for="Buscar por">Buscar por: </label>

                    <select name="Buscar por" id="Buscar por">
                        <option value="ID productos">ID productos</option>
                        <option value="Descripcion">Descripción</option>
                        <option value="Todos los productos">Todos los productos</option>
                    </select>
                    <input type="text" placeholder="Search..." name="search" />
                    <input type="submit" value="Buscar"></input>
                </form>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="table">
                <table>
                    <tr>
                        <th>ID Producto </th>
                        <th>Descripción</th>
                        <th>Valor Unitario</th>
                        <th>Estado</th>
                    </tr>
                    <tr>
                        <td>12345</td>
                        <td>
                            <input type="text" id="fname" name="fname" />
                        </td>
                        <td>
                            <input type="text" id="fname" name="fname" />
                        </td>
                        <td>
                            <select name="Combobox" id="estado1">
                                <option value="Disponible">Disponible</option>
                                <option value="No disponible">No disponible</option>
                            </select>
                        </td>

                    </tr>
                    <tr>
                        <td>12345</td>
                        <td>
                            <input type="text" id="fname" name="fname" />
                        </td>
                        <td>
                            <input type="text" id="fname" name="fname" />
                        </td>
                        <td>
                            <select name="Combobox" id="estado2">
                                <option value="Disponible">Disponible</option>
                                <option value="No disponible">No disponible</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>8896</td>
                        <td>
                            <input type="text" id="fname" name="fname" />
                        </td>
                        <td>
                            <input type="text" id="fname" name="fname" />
                        </td>
                        <td>
                            <select name="Combobox" id="estado2">
                                <option value="Disponible">Disponible</option>
                                <option value="No disponible">No disponible</option>
                            </select>
                        </td>

                    </tr>
                </table>

            </div>
            <div>
                <button className="button1" onClick={actualizar} type="submit"> Actualizar</button>
                <button className="button1" onClick={guardar} type="submit"> Guardar</button>
                <button className="button1" onClick={eliminar} type="submit"> Eliminar</button>
            </div>
        </>


    )
}

export default App;
