import Head from 'next/head'
import LinkNX from '../LinkNX'
import {setCookie} from 'nookies'
import axios from '../../services/axios';
import '../../../styles/Home.module.css'
import { useForm} from 'react-hook-form'



export default function ConteudoLogin(props) {

    const {register, handleSubmit} = useForm();

  

    function handleSignIn(data) {
        

         axios.post("/auth",  {
            email: data.email,
            senha: data.password,
        }).then((response) => {
            console.log(response.data.token);
  

             if(response.data.token !== "" && response.data.token !== undefined){
                 salvarCookie(response.data.token);
             }
                  
        })   
    }
    
   async function salvarCookie(LoggedToken) {
    await LoggedToken;
    setCookie(undefined, 'nextauth.token', LoggedToken, {
        maxAge: 60 * 60 * 1 // 1 hour
    });

    if(LoggedToken !== undefined && LoggedToken !== "") {
        window.location.href ="/eventos"
    }
    }


    return (
    
        <div className={props.classeDiv}>
            <Head>
            </Head>
            <div className='container-md'>
                <h1 className='text-blue display-1 pt-5 text-center'>{props.titulo}</h1>
                <div className='py-5 text-center container'>
                    <div className="contact-content">
                        <div className="column right">
                            <div className='album pt-5 container'>
                                <form onSubmit={handleSubmit(handleSignIn)}>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input 
                                            className='form-control' 
                                            type="email" name="email" 
                                            placeholder="Email" 
                                            {...register('email')}
                                            />
                                        </div>
                                    </div>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input 
                                            className='form-control' 
                                            type="password" 
                                            name="senha" 
                                            placeholder="Senha"
                                            {...register('password')}
                                            />
                                        </div>
                                    </div>
                                    
                                        <div className='d-flex justify-content-end pb-4'>
                                            <LinkNX hrefLink='/recuperarSenha' nomeLink="Esqueceu a senha?"/>
                                        </div>
                                        <button className={props.formBtn} type="submit">teste</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}