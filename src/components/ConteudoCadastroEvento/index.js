import Head from 'next/head';
import LinkBtn from '../LinkBotao';
//import axios from '../../services/axios';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from '../../../styles/Home.module.css';

export default function ConteudoCadastroEvento(props) {
    const schema = yup
        .object({
            nome: yup.string().required('Nome obrigatório'),
            //usuario: yup.string().required('Usuário obrigatório'),
            data: yup.string().required('Data obrigatório'),
            descricao: yup.string().required('Descrição obrigatório'),
            categoria: yup.string().required('Categoria obrigatório'),
            local: yup.string().required('Local obrigatório'),
            palavraChave: yup
                .string()
                .required('Palavra Chave obrigatório')
                .min(2, 'Mínimo de 2 caracteres')
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

    const [file, setFile] = useState();

    const cadastrarEvento = async (data) => {
        //Realizando cadastro de evento
        const response = await axios.post(
            'http://18.231.37.81:3000/evento',
            data
        );
        console.log(data);
        //Formando dados de foto
        let formData = new FormData();
        formData.append(
            'evento',
            response.data.id || '62c24f869c129a03e17841a0'
        );

        formData.append('banner', true);
        formData.append('file', file);
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };

        //Realizando cadastro de foto
        await axios
            .post('http://18.231.37.81:3000/foto', formData, config)
            .then(() => {
                window.location.href = '/eventos';
            })
            .catch((error) => {
                console.log(error);
            });

        alert('Success!');
        reset();
    };
    console.log(file);
    const handleChange = (e) => {
        const [f] = e.target.files;
        setFile(f);
    };

    if (typeof window !== 'undefined') {
        const userTokenID = localStorage.getItem('usertoken');

        return (
            <div className={props.classeDiv}>
                <div className="container col-md-4">
                    <h1 className="display-4 mt-4 pt-3 text-center">
                        {props.titulo}
                    </h1>
                    <form onSubmit={handleSubmit(cadastrarEvento)}>
                        <input
                            className="mb-1 mt-3 pt-3 pb-3 pl-2 pr-2 borda col-md-12 bg-light"
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
                        <div className={styles.hidden}>
                            <input
                                defaultValue={userTokenID}
                                className="mb-1 mt-1 pt-3 pb-3 pl-2 pr-2 borda col-md-12 bg-light"
                                type="text"
                                name="id"
                                {...register('usuario')}
                                placeholder="id"
                            />
                        </div>

                        <input
                            className="mb-1 mt-1 pt-3 pb-3 pl-2 pr-2 borda col-md-12 bg-light"
                            type="datetime-local"
                            name="data"
                            {...register('data')}
                            placeholder="Data"
                        />

                        <div>
                            <small className="text-danger">
                                {errors.data?.message}
                            </small>
                        </div>

                        <textarea
                            className="mb-1 mt-1 pt-3 pb-3 pl-2 pr-2 borda col-md-12 bg-light"
                            id="descricao"
                            rows="3"
                            {...register('descricao')}
                            placeholder="Descrição"
                        ></textarea>

                        <div>
                            <small className="text-danger">
                                {errors.descricao?.message}
                            </small>
                        </div>

                        <input
                            className="mb-1 pt-3 pb-3 pl-2 pr-2 borda col-md-12 bg-light"
                            type="text"
                            name="categoria"
                            {...register('categoria')}
                            placeholder="Categoria"
                        />

                        <div>
                            <small className="text-danger">
                                {errors.categoria?.message}
                            </small>
                        </div>

                        <input
                            className="mb-1 mt-1 pt-3 pb-3 pl-2 pr-2 borda col-md-12 bg-light"
                            type="text"
                            name="local"
                            {...register('local')}
                            placeholder="Local"
                        />

                        <div>
                            <small className="text-danger">
                                {errors.local?.message}
                            </small>
                        </div>

                        <input
                            className="mb-1 mt-1 pt-3 pb-3 pl-2 pr-2 borda col-md-12 bg-light"
                            type="text"
                            name="palavraChave"
                            {...register('palavraChave')}
                            placeholder="Palavra Chave"
                        />

                        <div>
                            <small className="text-danger">
                                {errors.local?.message}
                            </small>
                        </div>
                        <div className="borda mt-2">
                            <div className="fields custom-file">
                                <input
                                    type="file"
                                    className="custom-file-input"
                                    id="customFileLang"
                                    lang="pt-br"
                                    onChange={handleChange}
                                    multiple={false}
                                />
                                <label className="custom-file-label">
                                    {file ? file.name : ''}
                                </label>
                            </div>
                        </div>

                        <br />
                        <div className="text-center">
                            <LinkBtn
                                nomeBtn={props.nomeBtn}
                                tipoBtn={props.tipoBtn}
                                formBtn={props.formBtn}
                            />
                        </div>
                    </form>
                    <div>⠀</div>
                </div>
            </div>
        );
    }
}
