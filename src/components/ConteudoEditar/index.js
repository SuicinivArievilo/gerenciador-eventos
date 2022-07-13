import {useRouter} from 'next/router';
import LinkBtn from '../LinkBotao';
//import axios from '../../services/axios';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import moment from 'moment';

import '../../../styles/Home.module.css';

export default function EditarEvento(props) {
    const schema = yup
        .object({
            nome: yup.string().required('Nome obrigatório'),
            usuario: yup.string().required('Usuário obrigatório'),
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


const router = useRouter();

const idRouter = router.query.EditarEvento;

  
    const AtualizarEvento = async (data) => {
        //Realizando cadastro de evento
        const response = await data
         try { 
            axios.put(
            'http://18.231.37.81:3000/evento'+idRouter,
            data
        );
        console.log(data);}
        catch (error) {
            console.log("Esse e o erro"+error);
        }
    };

// Retornar dados do evento atual para os campos.


console.log('Esse é o ID Router ->:' + idRouter);

const [detalhes, setDetalhes] = useState([]);
useEffect(() => {
    if (idRouter != undefined) {
        axios.get(`http://18.231.37.81:3000/evento/${idRouter}`).then((response) => {
            setDetalhes(response.data);
        });

        console.log(detalhes);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [idRouter]);









  

    return (
        <div className={props.classeDiv}>
            <div className="container-md">
                <h1 className="text-blue display-4 pt-5 text-center">
                    {props.titulo}
                </h1>
                <div className="text-center container">
                    <div className="contact-content">
                        <div className="column right">
                            <div className="album py-5 container">
                                <form onSubmit={handleSubmit(AtualizarEvento)}>
                                    <span>{errors.nome?.message}</span>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input
                                                defaultValue={detalhes?.nome}
                                                className="form-control"
                                                type="text"
                                                name="name"
                                                {...register('nome')}
                                                placeholder="Nome"
                                            />
                                        </div>
                                    </div>
                                    <span>{errors.data?.message}</span>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input
                                            defaultValue={moment.utc(detalhes?.data).format('YYYY-MM-DDTHH:mm')}
                                                className="form-control"
                                                type="datetime-local"
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
                                                defaultValue={detalhes?.descricao}
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
                                                defaultValue={detalhes?.categoria}
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
                                                defaultValue={detalhes?.local}
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
                                                defaultValue={detalhes?.palavraChave}
                                                className="form-control"
                                                type="text"
                                                name="palavraChave"
                                                {...register('palavraChave')}
                                                placeholder="Palavra Chave"
                                            />
                                        </div>
                                    </div>


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
