/* eslint-disable react-hooks/rules-of-hooks */
import CardsEventos from '../src/components/CardsEventos';
import HeaderHoje from '../src/components/HeaderHoje';
import BotaoEvento from '../src/components/BotaoEvento';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import axios from '/src/services/axios';
import moment from 'moment';

export default function eventosPassados() {

const [eventosPassados, setEventosPassados] = useState([]);
useEffect(() => {
    try {
        axios
            .get('/listarEventosPassados')
            .then((response) => {
              setEventosPassados(response.data);
            });
        console.log(eventosPassados);
    } catch (error) {
        alert('falha ao buscar eventos');
    }

    //eslint-disable-next-line
}, []);


    return (
        <div>
            <HeaderHoje
                formPassados={styles.navActive}
                formHoje={styles.navCustomLink}
                formChegando={styles.navCustomLink}
                headerBg={styles.navBg}
            />
            {eventosPassados?.map((eventoPassado) => (
            <CardsEventos
                key={eventoPassado._id}
                idEvento={eventoPassado._id}
                tituloEvento={eventoPassado.nome}
                
                dataEvento={moment.utc(eventoPassado.data).format('DD/MM/YYYY HH:mm')}
                localEvento={eventoPassado.local}
                categEvento={eventoPassado.categoria}
                hrefBtn={"detalhes/"+eventoPassado._id}
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
                formBtn="btn btn-primary btn-lg m-1 w-50"
            />
        </div>
    );
}
