/* eslint-disable react-hooks/rules-of-hooks */
import CardsEventos from '../src/components/CardsEventos';
import HeaderHoje from '../src/components/HeaderHoje';
import BotaoEvento from '../src/components/BotaoEvento';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import axios from '/src/services/axios';
import moment from 'moment';
import { set, useForm} from 'react-hook-form'

export default function eventosPassados() {
    const {register, handleSubmit} = useForm();

const [eventosPassados, setEventosPassados] = useState([]);
const [eventoFiltro] = useState([]);
useEffect(() => {
    if (eventoFiltro.data !== undefined) {
        
    } else {

    try {
        axios
            .get('/listarEventosPassados')
            .then((response) => {
              setEventosPassados(response.data);
            });
    } catch (error) {
        alert('falha ao buscar eventos');
    }
}
    //eslint-disable-next-line
}, []);


const handleFiltro = (data) => {
    try {
        axios.post('/listarEventoPeriodo',{
            dataInicio: data.dataInicio,
            dataFim : data.dataFinal
        })
        .then((response) => {
            setEventosPassados(response.data);
        });
    } catch (error) {
        alert('falha ao buscar eventos');
    }
}



    return (
        <div>
            <title>Eventos - Passado</title>
            <HeaderHoje
                formPassados={styles.navActive}
                formHoje={styles.navCustomLink}
                formChegando={styles.navCustomLink}
                headerBg={styles.navBg}
            />

            <form onSubmit={handleSubmit(handleFiltro)}>
                <div className="container text-center col-md-5">
                    <h5 className="text-left text-primary mb-3">
                        Selecione um Período:
                    </h5>
                    <input
                        type={'date'}
                        {...register('dataInicio')}
                        className="mb-1 pt-2 pb-2 pl-2 pr-2 mr-1 borda bg-light"
                    ></input>
                    <input
                        type={'date'}
                        {...register('dataFinal')}
                        className="mb-1 pt-2 pb-2 pl-2 pr-2  borda bg-light"
                    ></input>
                </div>
                <div className="container text-right mt-2 col-md-5">
                    <button
                        type="submit"
                        className="btn btn-md btn-primary p-2 pl-4 pr-4 mb-1 "
                    >
                        Pesquisar
                    </button>
                </div>
            </form>

            <h5 className="container text-left text-primary mb-3  col-md-5">
                Resultado:
            </h5>

            {eventosPassados?.map((eventoPassado) => (
                <CardsEventos
                    key={eventoPassado._id}
                    idEvento={eventoPassado._id}
                    tituloEvento={eventoPassado.nome}
                    dataEvento={moment
                        .utc(eventoPassado.data)
                        .format('DD/MM/YYYY HH:mm')}
                    localEvento={eventoPassado.local}
                    categEvento={eventoPassado.categoria}
                    hrefBtn={'detalhes/' + eventoPassado._id}
                    tipoBtn="submit"
                    nomeBtn="Visualizar"
                />
            ))}
            <div>⠀</div>
        </div>
    );
}
