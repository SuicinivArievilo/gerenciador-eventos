
import {setCookie} from 'nookies'
import axios from '../../services/axios';
import '../../../styles/Home.module.css'
import { set, useForm} from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function ConteudoLogin(props) {
    const schema = yup
        .object({
            email: yup
                .string()
                .required('Este campo é obrigatório')
                .email('Insira um email válido'),
            senha: yup.string().required('Este campo é obrigatório')
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

    function handleSignIn(data) {
        axios
            .post('/auth', {
                email: data.email,
                senha: data.senha
            })
            .then((response) => {
                if (
                    response.data.token !== '' &&
                    response.data.token !== undefined
                ) {
                    salvarCookie(response.data.token, response.data.user._id);
                }
            })
            .catch((error) => {
                alert('Email ou senha inválidos');
            });
    }

    async function salvarCookie(LoggedToken, LoggedUser) {
        await LoggedToken;
        setCookie(undefined, 'nextauth.token', LoggedToken, {
            maxAge: 60 * 60 * 1 // 1 hour
        });

        localStorage.setItem('usertoken', LoggedUser);

        if (LoggedToken !== undefined && LoggedToken !== '') {
            window.location.href = '/eventos';
        }
    }

    return (
        <div className="container col-md-4 mt-4 pt-3">
            <h1 className="display-4 mt-5 pt-5 text-center text-primary">
                {props.titulo}
            </h1>
            <div className="mt-4 container text-center">
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <input
                        className="mb-1 pt-3 pb-3 pl-2 pr-2 borda rounded-top col-md-12 bg-light"
                        type="email"
                        name="email"
                        placeholder="Email"
                        {...register('email')}
                    />
                    <div>
                        <small className="text-danger">
                            {errors.email?.message}
                        </small>
                    </div>

                    <input
                        className="mb-0 pt-3 pb-3 pl-2 pr-2 borda rounded-bottom col-md-12 bg-light"
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        {...register('senha')}
                    />
                    <div>
                        <small className="text-danger">
                            {errors.senha?.message}
                        </small>
                    </div>

                    {/* <div className="d-flex justify-content-end pb-4">
                            <LinkNX
                                hrefLink="/recuperarSenha"
                                nomeLink="Esqueceu a senha?"
                            />
                        </div> */}

                    <button className={props.formBtn} type="submit">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}