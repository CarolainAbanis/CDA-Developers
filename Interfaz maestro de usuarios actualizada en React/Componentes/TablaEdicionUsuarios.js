import React, { Component } from 'react'

export default class TablaEdicionDeUsuarios extends Component {
    render() {
        const usuarios = this.props.usuarios;
        return(
            <form>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="5">Edicion de Usuarios</th>
                        </tr>
                        <tr>
                            <th>ID Usuario</th>
                            <th>Nombre</th>
                            <th>Correo electronico</th>
                            <th>Rol Usuario</th>
                            <th>Estado</th>
                        </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="number" value={usuarios.id} onChange={this.props.cambioEnUsuarios}/></td>
                        <td><input type="text" value={usuarios.nombre} onChange={this.props.cambioEnUsuarios}/></td>
                        <td><input type="text" value={usuarios.correo} onChange={this.props.cambioEnUsuarios}/></td>
                        <td>
                            <select className="rolUsuario" onChange={this.props.cambioEnUsuarios}>
                                <option value="administrador">Administrador</option>
                                <option value="vendedor">Vendedor</option>
                            </select>
                        </td>
                        <td>
                        <select className="estadoUsuario" onChange={this.props.cambioEnUsuarios}>
                            <option value="pendiente">Pendiente</option>
                            <option value="autorizado">Autorizado</option>
                            <option value="no autorizado">No Autorizado</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
                </table>
                <div className = "botonesAbajo">
                <input type="submit" value = "Crear"/>
                <input type="reset" value = "Limpiar"/>
                </div>
            </form>
        )
    }
}