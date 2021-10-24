import axios from 'axios';
import React from 'react';
import useRouter from '../utils/useRouter';
import '../estilos.css';

import { GoogleLogin } from 'react-google-login';



function Login(){
  const router = useRouter();
  
  const responseGoogle = async (response) => {
    console.log(response);
    try{
    const appToken = await axios.post('http://localhost:4000/google',{token:response.tokenId})
    //Aqui guarda el token 
    //Aqui redireccionar a la vista que quiero mostrar 
    router.history.push('/productos')
    
  
    }catch(err){
      alert('Error al iniciar sesion')

    }
 
 
 
  }


  
return(
  <>
  {console.log(process.env.REACT_APP_CLIENT_ID,'Pase por aqui')}
  
  <GoogleLogin
    clientId={'10224061212-141q3j3j1jbjn6vmsshl9gl36qk4r9l6.apps.googleusercontent.com'}
    render = {renderProps=>(
      <input type="submit" onClick={renderProps.onClick} value="Ingresa con Google" className="button_google"/>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  </>
)
  
}
export default Login;

  