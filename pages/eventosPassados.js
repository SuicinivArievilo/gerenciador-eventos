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
                <input type={'date'} {...register('dataInicio')}></input>
                <input type={'date'} {...register('dataFinal')}></input>
                <button type="submit">
                        Filtrar
                    </button>
            </form>



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
                    formBtn="btn btn-primary btn-lg m-1 w-40"
                />
            ))}

            <BotaoEvento
                titulo="#"
                hrefBtn="/eventos"
                tipoBtn="submit"
                nomeBtn="Entrar"
                formBtn=""
            />
            <div>⠀</div>
        </div>
    );
}
