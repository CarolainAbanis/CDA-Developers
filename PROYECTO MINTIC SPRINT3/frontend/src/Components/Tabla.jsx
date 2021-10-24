        import React,{useState} from 'react';
        import listado from "../Actions/maestroProductosAction"

        

        function agregarFila1(productos){
                const productosRows = productos.map((pdt) =>{
                    return(
                        <tr key= {pdt.idproducto}> 
                        <td>{pdt.productId}</td>
                        <td>{pdt.description}</td>
                        <td>{pdt.unitValue}</td>
                        <td>{pdt.productStatus}</td>
                        <td>{pdt.createdDate}</td>
                    </tr>);
                });
                    return productosRows
            }
            


        function Tabla(){
            const [productosState,setProductos] = useState({})
            function agregarFila(){
                console.log('agregar fila', productosState)
            
                if (productosState.length<=0){
                    window.alert('No hay productos en la BD')
                    return (
                        <div></div>
                    )
                }else{
            const filas =  productosState.map((elementoLista)=>{
                return(
                    <tr>
                    <td>{elementoLista.productId}</td>
                    <td>{elementoLista.description}</td>
                    <td>{elementoLista.unitValue}</td>
                    <td><select name="Combobox" id="estado1">
                    <option value="Disponible">Disponible</option>
                    <option value="No disponible">No disponible</option></select></td>
                    <td>{elementoLista.createdDate}</td>
                </tr>
                )
            })
            console.log("hola",filas)
                    return (<div>
                                {filas}
                            </div>
                    )
                    }
            }


            function actualizar(e) {
                e.preventDefault();
                window.alert("Su producto ha sido actualizado con éxito")

            }

            function guardar(e) {
                e.preventDefault();
                window.alert("Su producto ha sido guardado con éxito")
            }

            async function eliminar(e) {
                console.log('eliminar')
                
                    const data = await listado.maestroProductosAction();
                    console.log(data)
                    setProductos(data)
                console.log(productosState)
                
            
            }

                    return(

                        <tabla className="table">
                                    <table id="tabla">
                                        <tr>
                                            <th>ID Producto </th>
                                            <th>Descripción</th>
                                            <th>'Valor Unitario'</th>
                                            <th>Estado</th>
                                            <th>Fecha de registro</th>
                                        </tr>
                                        {/* {agregarFila()} */}
                                    </table>
                        <div>
                        <button className="button1" onClick={actualizar} type="button"> Actualizar</button>
                        <button className="button1" onClick={guardar} type="button"> Guardar</button>
                        <button className="button1" onClick={eliminar} type="button"> Eliminar</button>
                    </div>
                </tabla>



                )
                }

                export default Tabla;