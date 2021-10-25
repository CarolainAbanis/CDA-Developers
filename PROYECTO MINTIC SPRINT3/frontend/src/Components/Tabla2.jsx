import axios from "axios";
import { useEffect,useState } from "react";


function Tabla(){
    //Manejar los estados de renderizacion
    const [productos,setProductos] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4000/ProductosAll').then(response =>{
            console.log(response)
            setProductos(response.data)
        })
    
    },[])
    return(
    
       <><tabla className="table">
            <table id="tabla">
                <tr>
                    <th>ID Producto </th>
                    <th>Descripción</th>
                    <th>Valor Unitario</th>
                    <th>Estado</th>
                    <th>Fecha de registro</th>
                </tr>


            </table>
      <>
                {productos.map(producto => (

                    <tr>
                        <td>{producto.productId}</td>
                        <td>{producto.description}</td>
                        <td>{producto.unitValue}</td>
                        <td><select name="Combobox" id="estado1">
                            <option value="Disponible">Disponible</option>
                            <option value="No disponible">No disponible</option></select></td>
                        <td>{producto.createdDate}</td>
                    </tr>


                ))}
                </>
            </tabla>

            </>
    )
}
export default Tabla;