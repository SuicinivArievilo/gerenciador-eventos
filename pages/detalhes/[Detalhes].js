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
                    formBtn="btn btn-lg m-1 btn-primary"
                />

                <BotaoEvento
                    titulo="#"
                    hrefBtn="/eventos"
                    tipoBtn="submit"
                    nomeBtn="Entrar"
                    formBtn=""
                />
            </div>
        ) : (
            <div></div>
        )
    ) : (
        <div>
            <HeaderSetaELogo hrefSeta="/eventos" />
            <div className="starter-template container text-center mt-5 pt-5">
                <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="64.000000pt"
                    height="64.000000pt"
                    viewBox="0 0 64.000000 64.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g
                        transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                        fill="#023160"
                        stroke="none"
                    >
                        <path
                            d="M27 612 c-15 -16 -17 -52 -17 -294 0 -254 1 -276 18 -291 16 -15 52
-17 294 -17 254 0 276 1 291 18 15 16 17 52 17 294 0 254 -1 276 -18 291 -16
15 -52 17 -294 17 -254 0 -276 -1 -291 -18z m568 -18 c10 -10 15 -29 13 -48
l-3 -31 -285 0 -285 0 -3 31 c-6 63 1 64 288 64 225 0 261 -2 275 -16z m-364
-305 c6 -85 -1 -129 -22 -129 -6 0 -13 9 -16 20 -4 14 -14 20 -34 20 -17 0
-32 6 -35 15 -8 19 74 167 89 162 7 -2 14 -38 18 -88z m129 71 c16 -16 20 -33
20 -90 0 -76 -19 -110 -60 -110 -41 0 -60 34 -60 110 0 76 19 110 60 110 11 0
29 -9 40 -20z m140 -53 c0 -40 5 -78 11 -84 8 -8 8 -13 0 -17 -6 -4 -11 -16
-11 -27 0 -10 -7 -19 -15 -19 -8 0 -15 9 -15 20 0 16 -7 20 -35 20 -46 0 -46
22 -3 99 59 105 68 106 68 8z"
                        />
                        <path
                            d="M70 560 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
                        />
                        <path
                            d="M120 560 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
                        />
                        <path
                            d="M170 560 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
                        />
                        <path
                            d="M172 255 c-10 -21 -9 -25 3 -25 9 0 15 10 15 25 0 14 -2 25 -3 25 -2
0 -9 -11 -15 -25z"
                        />
                        <path
                            d="M300 270 c0 -63 2 -70 20 -70 18 0 20 7 20 70 0 63 -2 70 -20 70 -18
0 -20 -7 -20 -70z"
                        />
                        <path d="M452 265 c-15 -33 -15 -35 3 -35 10 0 15 10 15 30 0 37 -3 37 -18 5z" />
                    </g>
                </svg>
            </div>
        </div>
    );
}
