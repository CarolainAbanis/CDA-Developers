import React, { Component } from 'react'

export default class Tabla extends React.Component{
    render() {
        const usuarios= this.props.usuarios;    
        return (

            <table>
            <tr>
            </tr>
            <tr>
            <thead>
           <th>Id Venta</th>
           <th>CC cliente</th>
           <th>Nombre</th>
           <th>vendedor</th>
           <th>productos</th>
           <th>cantidad</th>
           <th>Valor unitario</th>
           <th>valor total</th>
           <th>Fecha de venta</th>
           <th>estado de venta</th>
           </thead>
       </tr>
       
       <tr>
               <td>

               </td>

               <td><input type="number" value={usuarios.id} onChange={this.props.cambioEnUsuarios}/></td>
               <td><input type="text" value={usuarios.nombre} onChange={this.props.cambioEnUsuarios}/></td>
               <td><input type="text" value={usuarios.nombre} onChange={this.props.cambioEnUsuarios}/></td>
               <td>

               </td>
               <td>



               <select class="estadodeventa"onChange={this.props.cambioEnUsuarios}>
                        <option value="En proceso">En proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
                    </select>

               </td>
               
               </tr>
               <tr>
               <td>

               </td>
               <td><input type="number" value={usuarios.id} onChange={this.props.cambioEnUsuarios}/></td>
               <td><input type="text" value={usuarios.nombre} onChange={this.props.cambioEnUsuarios}/></td>
               <td><input type="text" value={usuarios.nombre} onChange={this.props.cambioEnUsuarios}/></td>
               <td>

               </td>
               <td>



               <select class="estadodeventa"onChange={this.props.cambioEnUsuarios}>
                        <option value="En proceso">En proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
                    </select>

               </td>
               
               </tr><tr>
               <td>

               </td>
               <td><input type="number" value={usuarios.id} onChange={this.props.cambioEnUsuarios}/></td>
               <td><input type="text" value={usuarios.nombre} onChange={this.props.cambioEnUsuarios}/></td>
               <td><input type="text" value={usuarios.nombre} onChange={this.props.cambioEnUsuarios}/></td>
               <td>

               </td>
               <td>
               <select class="estadodeventa"onChange={this.props.cambioEnUsuarios}>
                        <option value="En proceso">En proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
                    </select>
               </td>
               </tr><tr>

               <td>

               </td>
               <td><input type="number" value={usuarios.id} onChange={this.props.cambioEnUsuarios}/></td>
               <td><input type="text" value={usuarios.nombre} onChange={this.props.cambioEnUsuarios}/></td>
               <td><input type="text" value={usuarios.nombre} onChange={this.props.cambioEnUsuarios}/></td>
               <td>


               <select class="estadodeventa"onChange={this.props.cambioEnUsuarios}>
                        <option value="En proceso">En proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
                    </select>



               </td>

           </tr><tr>
               <td>

               </td>
               <td><input type="number" value={usuarios.id} onChange={this.props.cambioEnUsuarios}/></td>
               <td><input type="text" value={usuarios.nombre} onChange={this.props.cambioEnUsuarios}/></td>
               <td><input type="text" value={usuarios.nombre} onChange={this.props.cambioEnUsuarios}/></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td>


               <select class="estadodeventa"onChange={this.props.cambioEnUsuarios}>
                        <option value="En proceso">En proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
                    </select>



               </td>
           </tr>
        </table>
        )

    }
}   