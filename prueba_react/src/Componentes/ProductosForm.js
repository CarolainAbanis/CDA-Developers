import React from "react";

class ProductosForm extends React.Component {
    /*submitForm = (event) => {
        event.preventDefault();
        console.log('vamos a enviar', event);
        this.props.onFormSubmit(event);
    }*/
//tomo los atributos que cambian en el formulario para actualizar
    onIdproductoChange=(evt) =>{
        const productos = this.props.productos;
        const newProducto = {...productos, idproducto:evt.target.value};
        console.log('cambio el idproductos', evt.target.value, productos, newProducto);
        this.props.onFormChange(newProducto);
    }
    render() {
        const productos = this.props.productos;
        return (
            //cuando se el evento onsubmit llamo la funcion que me van a pasar como padre
            <form onSubmit={this.props.onSaveProductos} id="formularioDatos" className="formulario">
                <div className="contenedorDatos">
                    <div> REGISTRO DE PRODUCTOS </div>

                    <div className="input-contendedor">
                        <label htmlFor="productoId"> ID producto</label>
                        <input name="productoId" id="productoId" type="text" value={productos.idproducto} 
                        onChange={this.onIdproductoChange}/>
                    </div>

                    <div className="input-contendedor">
                        <label htmlFor="descripcionProducto">Descripcion</label>
                        <input name="descripcionProducto" id="descripcionProducto" type="text"value={productos.descripcion} 
                        onChange={(evt)=>this.props.onFormChange({...productos, descripcion: evt.target.value})} />
                    </div>

                    <div className="input-contendedor">
                        <label htmlFor="valorProducto">Valor Unitario</label>
                        <input name="valorProducto" id="valorProducto" type="number" value={productos.valorunitario} 
                        onChange={(evt)=>this.props.onFormChange({...productos, valorunitario: parseInt (evt.target.value)})}/>
                    </div>

                    <div className="input-contendedor">
                        <label htmlFor="estadoProducto">Estado del producto</label>
                        <select name="estadoProducto" id="estadoProducto" className="combobox"value={productos.estado} 
                        onChange={(evt)=>this.props.onFormChange({...productos, estado: evt.target.value})}>
                            <option value="Disponible">Disponible</option>
                            <option value="No disponible">No disponible</option>
                        </select>
                    </div>

                    <div className="input-contendedor">
                        <label htmlFor="fechaRegistro">Fecha de registro</label>
                        <input type="date" name="fechaRegistro" id="fechaRegistro" value={productos.fecharegistro}
                        onChange={(evt)=>this.props.onFormChange({...productos, fecharegistro: evt.target.value})}/>
                    </div>

                    <div className="input-contendedor">
                    <input type= "submit" className="button" value={productos._id === -1 ? 'Añadir' : 'Actualizar'}></input>
                    <input type="button" className="button" value ="Limpiar" onClick={this.props.onClearProductos}></input>
                    </div>
                </div>

            </form>
        );
    }
}
//<button type="submit" className="button" value={productos._id === -1 ? 'Añadir' : 'Actualizar'}>.</button>
//<button type="submit" className="button" onClick={this.props.onClearProductos}>Limpiar</button>

export default ProductosForm;