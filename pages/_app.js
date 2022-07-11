import '../styles/globals.css'
import "../styles/css/bootstrap.css"
import  "@fontsource/work-sans";
import  "@fontsource/comfortaa";
import axios from  '../src/services/axios';
import { useRouter } from 'next/router';




function MyApp({ Component, pageProps }) {

    const { asPath } = useRouter()


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


  return(<Component {...pageProps} />) 
          
}

export default MyApp
