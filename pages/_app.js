import '../styles/globals.css'
import "../styles/css/bootstrap.css"
import  "@fontsource/work-sans";
import  "@fontsource/comfortaa";
import axios from  '../src/services/axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';




function MyApp({ Component, pageProps }) {

    const { asPath } = useRouter()

 useEffect (() => {

    if(asPath !== "/" && asPath !== "/registro" && asPath !== "/login" && asPath !== "/recuperarSenha") {
      
  axios
  .get('/validarToken')
  .then((response) => {
     ValidandoToken(response.data.message);
 })
 .catch((error) => {
        ValidandoToken(error);
 })

 async function ValidandoToken(validacao){
    await validacao;
   
    if(validacao == "Token válido!") { 
      
    } else {
      window.location.href ="/ "
    }
  
  }
}
    //eslint-disable-next-line
}, [])

  return(<Component {...pageProps} />) 
          
}

export default MyApp
