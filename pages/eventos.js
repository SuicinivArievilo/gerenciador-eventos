import CardsEventos from '../src/components/CardsEventos';
import HeaderHoje from '../src/components/HeaderHoje';
import BotaoEvento from '../src/components/BotaoEvento';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import axios from '/src/services/axios';


export default function Eventos() {
    const [eventos, setEventos] = useState([]);
    useEffect(() => {
        try {
            axios
                .get('/listarEventosHoje')
                .then((response) => {
                    setEventos(response.data);
                });
            console.log(eventos);
        } catch (error) {
            alert('falha ao buscar eventos');
        }       
        //eslint-disable-next-line
    }, []);

 
   
       



    return (
        <div>
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
                    dataEvento={evento.data}
                    localEvento={evento.local}
                    categEvento={evento.categoria}
                    hrefBtn={"detalhes/"+evento._id}
                    nomeBtn="Visualizar"
                    tipoBtn="submit"
                    formBtn="btn btn-lg m-1 btn-primary py-1"
                />
            ))}

            <BotaoEvento
                titulo="#"
                hrefBtn="/eventos"
                tipoBtn="submit"
                nomeBtn="Entrar"
                formBtn="btn btn-primary btn-lg m-1 w-50 "
            />
        </div>
    );
} 
