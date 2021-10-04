import './App.css';



function App() {

    function actualizar(e){
        e.preventDefault();
        window.alert("Su producto ha sido actualizado con éxito")   
    }

    function guardar(e){
        e.preventDefault();
        window.alert("Su producto ha sido guardado con éxito")   
    }

    function eliminar(e){
        e.preventDefault();
        window.alert("Su producto ha sido eliminado con éxito")   
    }
  return (
    <><><div className="topnav">
          <div>
              <a className="active" href="#ventas">Ventas</a>
              <a href="#productos">Productos</a>
              <a href="#usuarios">Usuarios</a>
          </div>


      </div>
      </><div>

              <button className button type="button1"> Ver inventario</button>

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
                          <td>12345</td>
                          <td>12345</td>
                          <td>Disponible</td>

                      </tr>
                      <tr>
                          <td>Camisa</td>
                          <td>Camisa</td>
                          <td>Camisa</td>
                          <td>No Disponible</td>
                      </tr>
                      <tr>
                          <td>1000</td>
                          <td>1000</td>
                          <td>1000</td>
                          <td>No Disponible</td>

                      </tr>
                  </table>

              </div>


              <div>
                  <button className="button1" onClick={actualizar} type="submit"> Actualizar</button>
                  <button className="button1" onClick={guardar} type="submit"> Guardar</button>
                  <button className="button1" onClick={eliminar} type="submit"> Eliminar</button>
              </div>

          </div></>

  );
}

export default App;
