import Head from 'next/head';
import LinkBtn from '../LinkBotao';
import axios from '../../services/axios';
import { appendErrors, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import '../../../styles/Home.module.css';


//export default function ConteudoCadastro(props) {

export default function CriarUsuario(props) {

    const schema = yup.object({
        nome: yup.string().required("Este campo é obrigatório"),
        sobrenome: yup.string().required("Este campo é obrigatório"),
        email: yup.string().required("Este campo é obrigatório").email("Insira um email válido"),
        senha: yup.string().required("Este campo é obrigatório").min(10, "Mínimo de 10 caracteres")
    }).required();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema)
    });

    const cadastrarUsuario = (data) => {
        try{
            axios.post('/usuario', data);

            window.location.href ="/login"
        } catch(error){
            console.log(error);
        }
        
 
        alert('sucesso');
        reset();
    };

    return (
        <div className={props.classeDiv}>
            <Head>
                {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" /> */}
            </Head>
            <div className="container-md">
                <h1 className="text-blue display-1 pt-5 text-center">
                    {props.titulo}
                </h1>
                <div className="py-5 text-center container">
                    <div className="contact-content">
                        <div className="column right">
                            <div className="album py-5 container">
                                <form onSubmit={handleSubmit(cadastrarUsuario)}>
                                <span>{errors.nome?.message}</span>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="name"
                                                {...register('nome')}
                                                placeholder="Nome"
                                            />
                                        </div>
                                    </div>
                                    <span>{errors.sobrenome?.message}</span>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="sobrenome" 
                                                {...register('sobrenome')}
                                                placeholder="Sobrenome"
                                            />
                                            
                                        </div>
                                    </div>
                                    <span>{errors.email?.message}</span>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input
                                                className="form-control"
                                                type="email"
                                                name="email"
                                                {...register('email')}
                                                placeholder="E-mail"
                                            />
                                        </div>
                                    </div>
                                    <span>{errors.senha?.message}</span> 
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input
                                                className="form-control"
                                                type="password"
                                                name="senha"
                                                {...register('senha')}
                                                placeholder="Senha"
                                            />
                                        </div>
                                    </div>
                                    <LinkBtn
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
    );
}

//}
