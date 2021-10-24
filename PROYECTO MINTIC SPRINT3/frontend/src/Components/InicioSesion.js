import React from "react";
import MaestroProductos from '../Components/MaestroProductos'
import Login from "../Components/Login"


class InicioSesion extends React.Component {

    render() {
        return(        

            <form name="formulario" action="#" method="POST" class="formulario">

            <h1> Iniciar Sesión </h1>
            <div className="contenedor">
               
                <div className="input-contendedor">
                    <i className="fas fa-user icon"></i> 
                    <label htmlFor="correo" id="correo-label"></label>
                    <input type="text" name="usuario" placeholder="Ingrese su usuario"/>
                </div>
                <div className="input-contendedor">
                    <i className="fas fa-key icon"/>
                    <label htmlFor="pws" id="pws-label"></label>
                    <input type="password" name="contrasena" placeholder="Contraseña"/> 
                    
                </div>
                <Login/>
                <button onclick={MaestroProductos} className="button">Ingresar</button>
                
                <p>¿No tienes cuenta? <a className="link" href="/RegistroUsuarios">Registrarse</a></p>
                /**Ana aca se supone que me manda a inicio de sesion pero no se como poner link en react */
             
            </div>
            
            
            </form>
              );             
    }
}
                export default InicioSesion;