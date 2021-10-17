import React from "react";

class ProductosForm extends React.Component {
    submitForm = (event) => {
        event.preventDefault();
        console.log('vamos a enviar', event);
        this.props.onFormSubmit(event);
    }
    render() {
        return (
            //cuando se el evento onsubmit llamo la funcion que me van a pasar como padre
            <form onSubmit={this.submitForm} id="formularioDatos" className="formulario">
                <div className="contenedorDatos">
                    <div> REGISTRO DE PRODUCTOS </div>

                    <div className="input-contendedor">
                        <label htmlFor="idProducto"> ID producto</label>
                        <input name="idProducto" id="idProducto" type="text" />
                    </div>

                    <div className="input-contendedor">
                        <label htmlFor="descripcionProducto">Descripcion</label>
                        <input name="descripcionProducto" id="descripcionProducto" type="text" />
                    </div>

                    <div className="input-contendedor">
                        <label htmlFor="valorProducto">Valor Unitario</label>
                        <input name="valorProducto" id="valorProducto" type="number" />
                    </div>

                    <div className="input-contendedor">
                        <label htmlFor="estadoProducto">Estado del producto</label>
                        <select name="estadoProducto" id="estadoProducto" className="combobox">
                            <option value="Disponible">Disponible</option>
                            <option value="No disponible">No disponible</option>
                        </select>
                    </div>

                    <div className="input-contendedor">
                        <label htmlFor="fechaRegistro">Fecha de registro</label>
                        <input type="date" name="fechaRegistro" id="fechaRegistro" />
                    </div>
                    
                    <button type="submit" className="button">Añadir</button>

                </div>

            </form>
        );
    }
}
export default ProductosForm;