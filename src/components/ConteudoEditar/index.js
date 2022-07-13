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
            'http://18.231.37.81:3000/evento/'+idRouter,
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
        axios
            .get(`http://18.231.37.81:3000/evento/${idRouter}`)
            .then((response) => {
                setDetalhes(response.data);
                let defaultValues = {};
                defaultValues.nome = detalhes?.nome;
                defaultValues.data = moment
                    .utc(detalhes?.data)
                    .format('YYYY-MM-DDTHH:mm');
                defaultValues.descricao = detalhes?.descricao;
                defaultValues.categoria = detalhes?.categoria;
                defaultValues.local = detalhes?.local;
                defaultValues.palavraChave = detalhes?.palavraChave;
                reset({ ...defaultValues });
            });

        console.log(detalhes);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [idRouter, reset]);

return (
    <div className="container col-md-4">
        <h1 className="display-4 mt-3 pt-3 text-center">{props.titulo}</h1>
        <div className="mt-4 container text-center">
            <form onSubmit={handleSubmit(AtualizarEvento)}>
                <input
                    defaultValue={detalhes.nome}
                    className="mb-1 mt-1 pt-3 pb-3 pl-2 pr-2 borda col-md-12 bg-light"
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
                    defaultValue={moment
                        .utc(detalhes?.data)
                        .format('YYYY-MM-DDTHH:mm')}
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
                    defaultValue={detalhes?.descricao}
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
                    defaultValue={detalhes?.categoria}
                    className="mb-1 mt-1 pt-3 pb-3 pl-2 pr-2 borda col-md-12 bg-light"
                    type="text"
                    name="categoria"
                    {...register('categoria')}
                    placeholder="Categoria"
                />
                <div>
                    <small className="text-danger">
                        {errors.detalhes?.message}
                    </small>
                </div>
                <input
                    defaultValue={detalhes?.local}
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
                    defaultValue={detalhes?.palavraChave}
                    className="mb-1 mt-1 pt-3 pb-3 pl-2 pr-2 borda col-md-12 bg-light"
                    type="text"
                    name="palavraChave"
                    {...register('palavraChave')}
                    placeholder="Palavra Chave"
                />
                <div>
                    <small className="text-danger">
                        {errors.palavraChave?.message}
                    </small>
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
