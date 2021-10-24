import React from "react";

export class ListaProductos extends React.Component {
    render() {
        
        const {productos} = this.props; // recibe las propiedades en una lista
        console.log('productos = ',productos);
        //recorre cada elemento de la lista y los pone en una fila
        const productosRows = productos.map((pdt) =>{
            return(<tr key= {pdt.idproducto}> 
                <td>{pdt.idproducto}</td>
                <td>{pdt.descripcion}</td>
                <td>{pdt.valorunitario}</td>
                <td>{pdt.estado}</td>
                <td>{pdt.fecharegistro}</td>
            </tr>);
        });
        console.log('productosRows = ',productosRows);
        return (
            <table className= "tabla">
                <thead>
                    <tr>
                        <th>ID Producto</th>
                        <th>Descripcion</th>
                        <th>Valor Unitario</th>
                        <th>Estado</th>
                        <th>Fecha de registro</th>
                    </tr>
                </thead>
                <tbody>
                   {productosRows}
                </tbody>
            </table>
        );

    }

}