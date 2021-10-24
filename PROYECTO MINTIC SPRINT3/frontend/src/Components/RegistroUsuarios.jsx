import React from "react";

class RegistroUsuarios extends React.Component {

    render() {
        return(        
            <form className="formulario">

                <h1> Registrarse</h1>
                <div className="contenedor">
                    <div className="input-contendedor">
                        <i clasclassNames="far fa-id-card icon"></i>
                        <label htmlFor="cedula" id="cedula-label"></label>
                        <input type="text" placeholder="Numero de cedula" />
                    </div>
                    <div className="input-contendedor">
                        <i className="fas fa-user icon"></i>
                        <label htmlFor="nombre" id="nombre-label"></label>
                        <input type="text" placeholder="Nombre completo"/>
                    </div>
                    <div claclassNamess="input-contendedor">
                        <i className="fas fa-envelope icon"></i>
                        <label htmlFor="correo" id="correo-label"></label>
                        <input type="text" placeholder="Ingrese su correo"/>
                    </div>
                    <div className="input-contendedor">
                        <i className="fas fa-key icon"></i>
                        <label htmlFor="pws" id="pws-label"></label>
                        <input type="password" placeholder="Contraseña"/>
                    </div>
                    <input type="submit" value="Registrate" className="button"/>
                    <p>Al registrarte, aceptas nuestras Condiciones de uso  y Política de privacidad.</p>
                    <p>¿Ya tienes cuenta?<a class ="link" href="inicio_sesion_cda.html">Iniciar Sesion</a></p>
                 /**Ana aca se supone que me manda a inicio de sesion pero no se como poner link en react 
                 este esta en jsx porque no me dejo cambiarlo a js pero le puedes cambiar la extencion antes de agg al react*/
                </div>
                </form>
                );             
    }
}
                export default RegistroUsuarios;