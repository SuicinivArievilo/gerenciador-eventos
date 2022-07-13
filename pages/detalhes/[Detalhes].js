/* eslint-disable react-hooks/rules-of-hooks */
import HeaderSetaELogo from '../../src/components/HeaderSetaELogo';
import DescricaoEvento from '../../src/components/DetalhesEvento';
import BotaoEvento from '../../src/components/BotaoEvento';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from '/src/services/axios';
import moment from 'moment';


export default function Detalhes() {
    const router = useRouter();

    const idRouter = router.query.Detalhes;

    console.log('Esse é o ID Router ->:' + idRouter);

    const [detalhes, setDetalhes] = useState([]);
    useEffect(() => {
        if (idRouter != undefined) {
            axios.get(`/evento/${idRouter}`).then((response) => {
                setDetalhes(response.data);
            });

            console.log(detalhes);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idRouter]);

    const [usuarioDocente, setUsuarioDocente] = useState([]);
    useEffect(() => {
        if (detalhes.usuario != undefined) {
            axios.get(`/usuario/${detalhes.usuario}`).then((response) => {
                setUsuarioDocente(response.data);
            });
            console.log(usuarioDocente);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detalhes.usuario]);

    return typeof detalhes.nome !== 'undefined' ? (
        detalhes ? (
            <div>
                <title>Evento</title>
                <HeaderSetaELogo hrefSeta="/eventos" />
                <DescricaoEvento
                    idRouter={idRouter}
                    key={detalhes?._id}
                    tituloEvento={detalhes?.nome}
                    docenteEvento={usuarioDocente?.nome}
                    dataEvento={moment
                        .utc(detalhes?.data)
                        .format('DD/MM/YYYY HH:mm')}
                    localEvento={detalhes?.local}
                    categEvento={detalhes?.categoria}
                    descEvento={detalhes?.descricao}
                    titulo="Enviar Foto"
                    tipoBtn="submit"
                    nomeBtn="Enviar Foto"
                    formBtn="btn btn-md m-1 btn-primary"
                />
            </div>
        ) : (
            <div></div>
        )
    ) : (
        <div>
            <HeaderSetaELogo hrefSeta="/eventos" />
        </div>
    );
}
