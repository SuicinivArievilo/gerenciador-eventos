import Head from 'next/head';
import LinkBtn from '../LinkBotao';
import axios from '../../services/axios';
import { appendErrors, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import '../../../styles/Home.module.css';


//export default function ConteudoCadastro(props) {

export default function CriarUsuario(props) {
    const schema = yup
        .object({
            nome: yup.string().required('Este campo é obrigatório'),
            sobrenome: yup.string().required('Este campo é obrigatório'),
            email: yup
                .string()
                .required('Este campo é obrigatório')
                .email('Insira um email válido'),
            senha: yup
                .string()
                .required('Este campo é obrigatório')
                .min(10, 'Mínimo de 10 caracteres')
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema)
    });

    const cadastrarUsuario = (data) => {
        try {
            axios.post('/usuario', data).then(() => {
                window.location.href = '/login';
            });
        } catch (error) {
            console.log(error);
        }

        alert('sucesso');
        reset();
    };

    return (
        <div className="container col-md-4">
            <h1 className="display-4 mt-4 pt-5 text-center text-primary">
                {props.titulo}
            </h1>
            <div className="mt-4 container text-center">
                <form onSubmit={handleSubmit(cadastrarUsuario)}>
                    <input
                        className="mb-0 mt-1 pt-3 pb-3 pl-2 pr-2 borda rounded-top col-md-12 bg-light"
                        type="text"
                        name="name"
                        {...register('nome')}
                        placeholder="Nome"
                    />
                    <div>
                        <small className="text-danger">
                            {errors.nome?.message}
                        </small>
                    </div>
                    <input
                        className="mb-0 mt-1 pt-3 pb-3 pl-2 pr-2 borda col-md-12 bg-light"
                        type="text"
                        name="sobrenome"
                        {...register('sobrenome')}
                        placeholder="Sobrenome"
                    />
                    <div>
                        <small className="text-danger">
                            {errors.sobrenome?.message}
                        </small>
                    </div>
                    <input
                        className="mb-0 mt-1 pt-3 pb-3 pl-2 pr-2 borda col-md-12 bg-light"
                        type="email"
                        name="email"
                        {...register('email')}
                        placeholder="E-mail"
                    />
                    <div>
                        <small className="text-danger">
                            {errors.email?.message}
                        </small>
                    </div>
                    <input
                        className="mb-0 mt-1 pt-3 pb-3 pl-2 pr-2 borda rounded-bottom col-md-12 bg-light"
                        type="password"
                        name="senha"
                        {...register('senha')}
                        placeholder="Senha"
                    />
                    <div>
                        <small className="text-danger">
                            {errors.senha?.message}
                        </small>
                    </div>
                    <div>
                        <LinkBtn
                            nomeBtn={props.nomeBtn}
                            tipoBtn={props.tipoBtn}
                            formBtn={props.formBtn}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

//}
