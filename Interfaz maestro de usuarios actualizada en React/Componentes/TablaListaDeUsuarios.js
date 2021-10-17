import React, { Component } from 'react'
export default class TablaListaDeUsuarios extends Component {
    render() {
        const usuarios = this.props.usuarios;
        const usuarioFila = usuarios.map((us, index) => {
            return<tr key = {index}>
            <td><button type="button" onClick={()=>this.props.editarUsuario(us.id)}>Actualizar</button></td>  
            <td><button type="button" onClick={()=>this.props.eliminarUsuario(us.id)}>Eliminar</button></td>
            <td>{us.id}</td>
            <td>{us.nombre}</td>
            <td>{us.correo}</td>
            <td>{us.rol}</td>
            <td>{us.estado}</td>      
        </tr> 
        });
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                        <th colSpan="7">Lista de usuarios</th>
                        </tr>
                        <tr>
                            <th colSpan="2">Opciones</th>
                            <th>ID Usuario</th>
                            <th>Nombre</th>
                            <th>Correo electronico</th>
                            <th>Rol usuario</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarioFila}
                    </tbody>
                </table>
            </div>
            
        );
    }
}
