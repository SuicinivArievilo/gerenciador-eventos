import CardsEventos from '../src/components/CardsEventos';
import HeaderHoje from '../src/components/HeaderHoje';
import BotaoEvento from '../src/components/BotaoEvento';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import axios from '/src/services/axios';
import moment from 'moment';

export default function Eventos() {
    const [eventos, setEventos] = useState([]);
    useEffect(() => {
        try {
            axios.get('/listarEventosHoje').then((response) => {
                setEventos(response.data);
            });
        } catch (error) {
            console.log('falha ao buscar eventos');
        }
        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <title>Eventos - Hoje</title>
            <HeaderHoje
                formPassados={styles.navCustomLink}
                formHoje={styles.navActive}
                formChegando={styles.navCustomLink}
                headerBg={styles.navBg}
            />

            {eventos?.map((evento) => (
                <CardsEventos
                    idEvento={evento._id}
                    key={evento._id}
                    tituloEvento={evento.nome}
                    dataEvento={moment
                        .utc(evento.data)
                        .format('DD/MM/YYYY HH:mm')}
                    localEvento={evento.local}
                    categEvento={evento.categoria}
                    hrefBtn={'detalhes/' + evento._id}
                    nomeBtn="Visualizar"
                    tipoBtn="submit"
                    formBtn="btn btn-lg btn-primary p-2 pl-4 pr-4 mb-1"
                />
            ))}

            <BotaoEvento
                titulo="#"
                hrefBtn="/eventos"
                tipoBtn="submit"
                nomeBtn="Entrar"
                formBtn=""
            />
        </div>
    );
} 
