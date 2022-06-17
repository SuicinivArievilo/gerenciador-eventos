import Head from 'next/head';
import LinkBtn from '../LinkBotao';
import axios from '../../services/axios';
import { useForm } from 'react-hook-form';

import '../../../styles/Home.module.css';

//export default function ConteudoCadastro(props) {

export default function CriarUsuario(props) {
    const {
        register,
        handleSubmit,
        formState: { erros },
        reset
    } = useForm();

    const cadastrarUsuario = (data) => {
        axios.post('/usuario', data, axiosConfig);
        console.log(axiosConfig);
        console.log(data);
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
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="name"
                                                {...register('name')}
                                                placeholder="Nome"
                                                required
                                            />
                                        </div>
                                    </div>
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
