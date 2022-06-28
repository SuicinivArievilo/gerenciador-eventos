import Head from 'next/head';
import LinkBtn from '../LinkBotao';
//import axios from '../../services/axios';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import '../../../styles/Home.module.css';

export default function ConteudoCadastroEvento(props) {
    const {
        register,
        handleSubmit,
        formState: { erros },
        reset
    } = useForm();

    const cadastrarEvento = (data) => {
        axios.post('http://18.231.37.81:3000/evento', data);
        console.log(data);
        //alert('sucesso');
        reset();
    };

    return (
        <div className={props.classeDiv}>
            <Head>
                {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" /> */}
            </Head>
            <div className="container-md">
                <h1 className="text-blue display-4 pt-5 text-center">
                    {props.titulo}
                </h1>
                <div className="text-center container">
                    <div className="contact-content">
                        <div className="column right">
                            <div className="album py-5 container">
                                <form onSubmit={handleSubmit(cadastrarEvento)}>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="name"
                                                {...register('nome')}
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
                                                name="id"
                                                {...register('usuario')}
                                                placeholder="id"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input
                                                className="form-control"
                                                type="date"
                                                name="data"
                                                {...register('data')}
                                                placeholder="Data"
                                            />
                                        </div>
                                    </div>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <textarea
                                                className="form-control"
                                                id="descricao"
                                                rows="3"
                                                {...register('descriacao')}
                                                placeholder="Descrição"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="categoria"
                                                {...register('categoria')}
                                                placeholder="Categoria"
                                            />
                                        </div>
                                    </div>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="local"
                                                {...register('local')}
                                                placeholder="Local"
                                            />
                                        </div>
                                    </div>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="palavraChave"
                                                {...register('palavraChave')}
                                                placeholder="Palavra Chave"
                                            />
                                        </div>
                                    </div>
                                    <div className="fields mb-3 custom-file">
                                        <input
                                            type="file"
                                            className="custom-file-input"
                                            id="customFileLang"
                                            lang="es"
                                        />
                                        <label className="custom-file-label">
                                            Escolher Banner
                                        </label>
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
