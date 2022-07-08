import Head from 'next/head';
import LinkBtn from '../LinkBotao';
//import axios from '../../services/axios';
import axios from 'axios';
import React, { useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import '../../../styles/Home.module.css';

export default function ConteudoCadastroEvento(props) {

    const schema = yup.object({
        nome: yup.string().required("Nome obrigatório"),
        usuario: yup.string().required("Usuário obrigatório"),
        data: yup.string().required("Data obrigatório"),
        descricao: yup.string().required("Descrição obrigatório"),
        categoria: yup.string().required("Categoria obrigatório"),
        local: yup.string().required("Local obrigatório"),
        palavraChave: yup.string().required("Palavra Chave obrigatório").min(2, "Mínimo de 2 caracteres")
    }).required();


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

        //Formando dados de foto
        let formData = new FormData();
        formData.append(
            'evento',
            response.data._id || '62c24f869c129a03e17841a0'
        );
        formData.append('banner', true);
        formData.append('file', file);
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };

        //Realizando cadastro de foto
        await axios.post('http://18.231.37.81:3000/foto', formData, config);

        alert('Success!');
        reset();
    };
    console.log(file);
    const handleChange = (e) => {
        const [f] = e.target.files;
        setFile(f);
    };

    /* const cadastrarFoto = (evento, banner, file) =>{
        axios.post('http://18.231.37.81:3000/foto',{
            evento:'629ea5692e9fa017cc168eea',
            banner:true,
            file:
        })
    };*/
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
                                    <span>{errors.usuario?.message}</span> 
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="id"
                                                {...register('usuario')}
                                                placeholder="id"
                                                
                                            />
                                        </div>
                                    </div>
                                    <span>{errors.data?.message}</span> 
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
                                    <span>{errors.descricao?.message}</span> 
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <textarea
                                                className="form-control"
                                                id="descricao"
                                                rows="3"
                                                {...register('descricao')}
                                                placeholder="Descrição"
                                                
                                            ></textarea>
                                        </div>
                                    </div>
                                    <span>{errors.categoria?.message}</span> 
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
                                    <span>{errors.local?.message}</span> 
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
                                    <span>{errors.palavraChave?.message}</span> 
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
                                            lang="pt-br"
                                            onChange={handleChange}
                                            multiple={false}
                                        />
                                        <label className="custom-file-label">
                                            Escolher Banner
                                        </label>
                                    </div>
                                    {file ? file.name : ''}
                                    <br />
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
