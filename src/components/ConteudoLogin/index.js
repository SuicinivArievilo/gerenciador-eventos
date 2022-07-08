import Head from 'next/head'
import LinkBtn from '../LinkBotao'
import LinkNX from '../LinkNX'
import Script from 'next/script'
import axios from '../../services/axios';
import '../../../styles/Home.module.css'
import React, { useEffect, useState } from "react";



export default function ConteudoLogin(props) {

    const [tokenJwt, setTokenJwt, userToken] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const login = async (e) => {
    
        try{ const res = await axios.post("/auth", {
            email: email,
            senha: senha,
        }).then((response) => {
            setTokenJwt(response.data.token);
            localStorage.setItem("token", tokenJwt) 
            console.log('Esse é o jwt'+tokenJwt);

            userToken = localStorage.getItem("token");
            console.log('Esse é o userToken'+userToken);

            if(userToken !== undefined && userToken !== "") {
                window.location.href ="/eventos"
            }
        })

        } catch(err) {
            console.log(err);
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
                                <form onSubmit={async e => {
                                    e.preventDefault();
                                    await login();
                                }}>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input 
                                            className='form-control' 
                                            type="email" name="email" 
                                            placeholder="Email" 
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                console.log(email);
                                            }}
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
                                            onChange={(e) => {
                                                setSenha(e.target.value);
                                                console.log(senha);
                                            }}
                                            />
                                        </div>
                                    </div>
                                    
                                        <div className='d-flex justify-content-end pb-4'>
                                            <LinkNX hrefLink='/recuperarSenha' nomeLink="Esqueceu a senha?"/>
                                        </div>
                                        <LinkBtn onClick={login}
                                        hrefBtn='#'
                                        nomeBtn={props.nomeBtn} 
                                        tipoBtn={props.tipoBtn} 
                                        formBtn={props.formBtn} 
                                        />
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}