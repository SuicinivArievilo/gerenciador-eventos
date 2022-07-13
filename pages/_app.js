import '../styles/globals.css'
import "../styles/css/bootstrap.css"
import  "@fontsource/work-sans";
import  "@fontsource/comfortaa";
import axios from  '../src/services/axios';
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';
import BotaoEvento from '/src/components/BotaoEvento';





function MyApp({ Component, pageProps }) {
   const [botao,setBotao] = useState(true);

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

const userTokenID = localStorage.getItem('usertoken')


   if(userTokenID !== null) {
      axios
          .get('/usuario/' + userTokenID)
          .then((response) => {
              ValidacaoDocete(response.data.docente);
          })
          .catch((error) => {
              ValidacaoDocete(error);
          });
   }

   async function ValidacaoDocete(docente){
      await docente;
      if(docente == false && asPath == "/registroEvento") {
         window.location.href ="/eventos "
      }   
      }

   
 
      if(asPath !== "/" && asPath !== "/registro" && asPath !== "/login" && asPath !== "/recuperarSenha" && asPath !== "/registroEvento"){
         setBotao(true)
      } else {
         setBotao(false)
      }
      



}, [botao,asPath])



 return typeof botao !== true ? (
   botao ?  (
  <>
  <Component {...pageProps} />
  <BotaoEvento />
  
  </>
  )  : (
   <><Component {...pageProps}/></> 
   )
   ) : (
   <>
   <Component {...pageProps} />
   </>
   );      
}

export default MyApp
