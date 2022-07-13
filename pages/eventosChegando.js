/* eslint-disable react-hooks/rules-of-hooks */
import CardsEventos from '../src/components/CardsEventos';
import HeaderHoje from '../src/components/HeaderHoje';
import BotaoEvento from '../src/components/BotaoEvento';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import axios from '/src/services/axios';
import moment from 'moment';

export default function eventosChegando() {
    const [listarEventosFuturos, setEventosFuturos] = useState([]);
    useEffect(() => {
        try {
            axios.get('/listarEventosFuturos').then((response) => {
                setEventosFuturos(response.data);
            });
        } catch (error) {
            alert('falha ao buscar eventos');
        }

        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <title>Eventos - Chegando</title>
            <HeaderHoje
                formPassados={styles.navCustomLink}
                formHoje={styles.navCustomLink}
                formChegando={styles.navActive}
                headerBg={styles.navBg}
            />
            {listarEventosFuturos?.map((eventoFuturo) => (
                <CardsEventos
                    idEvento={eventoFuturo._id}
                    key={eventoFuturo._id}
                    tituloEvento={eventoFuturo.nome}
                    dataEvento={moment
                        .utc(eventoFuturo.data)
                        .format('DD/MM/YYYY HH:mm')}
                    localEvento={eventoFuturo.local}
                    categEvento={eventoFuturo.categoria}
                    hrefBtn={'detalhes/' + eventoFuturo._id}
                    tipoBtn="submit"
                    nomeBtn="Visualizar"
                />
            ))}
            <div>⠀</div>
        </div>
    );
}
