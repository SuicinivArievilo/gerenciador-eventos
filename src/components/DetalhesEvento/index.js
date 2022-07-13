import CardImage from '../../../public/CardImage';
import LinkBtn from '../LinkBotao';
import axios from 'axios';
import React, { useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import Carousel from '../CarouselPic';

export default function DescricaoEvento(props) {
    const {
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({});

    const [file, setFile] = useState();

    const cadastrarFoto = async (data) => {
        const idEvento = props.idRouter;

        //Formando dados de foto
        let formData = new FormData();
        formData.append('evento', idEvento);

        formData.append('banner', false);
        formData.append('file', file);
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };
        console.log(formData);
        //Realizando cadastro de foto
        await axios.post('http://18.231.37.81:3000/foto', formData, config);

        alert('Success!');
        reset();
    };
    const handleChange = (e) => {
        const [f] = e.target.files;
        setFile(f);
    };
    return (
        <>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card-header shadow-sm p-1">
                                <div className="card-body p-2">
                                    <CardImage idEvento={props.idRouter} />
                                    <h5 className="card-title text-center">
                                        {props.tituloEvento}
                                    </h5>
                                    <div className="d-flex justify-content-between">
                                        <p className="fs-6 text">
                                            <svg
                                                version="1.0"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20.000000pt"
                                                height="20.000000pt"
                                                viewBox="0 0 50.000000 50.000000"
                                                preserveAspectRatio="xMidYMid meet"
                                            >
                                                <g
                                                    transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                                                    fill="#000000"
                                                    stroke="none"
                                                >
                                                    <path
                                                        d="M86 464 c-31 -30 -9 -84 34 -84 24 0 50 26 50 50 0 24 -26 50 -50 50
-10 0 -26 -7 -34 -16z m59 -34 c0 -18 -6 -26 -23 -28 -13 -2 -25 3 -28 12 -10
26 4 48 28 44 17 -2 23 -10 23 -28z"
                                                    />
                                                    <path
                                                        d="M290 470 c0 -5 -22 -10 -50 -10 -27 0 -50 -4 -50 -10 0 -6 52 -10
135 -10 l135 0 0 -130 0 -130 -130 0 c-80 0 -130 -4 -130 -10 0 -5 18 -10 40
-10 22 0 40 -2 40 -5 0 -3 -11 -28 -25 -55 -14 -28 -21 -50 -15 -50 6 0 20 20
32 45 12 25 25 45 28 45 3 0 16 -20 28 -45 12 -25 26 -45 32 -45 6 0 -1 22
-15 50 -14 27 -25 52 -25 55 0 3 36 5 80 5 l80 0 0 150 0 150 -85 0 c-50 0
-85 4 -85 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z"
                                                    />
                                                    <path
                                                        d="M37 352 c-13 -14 -17 -38 -17 -101 0 -74 2 -83 20 -88 17 -5 20 -14
20 -63 0 -65 9 -77 60 -77 58 0 60 6 60 153 l0 133 68 3 c64 3 67 4 67 28 0
25 -2 25 -87 28 -79 3 -87 1 -93 -18 -8 -26 -22 -26 -30 0 -8 25 -46 26 -68 2z
m63 -32 c16 -38 24 -38 40 0 12 30 14 30 86 30 43 0 74 -4 74 -10 0 -6 -30
-10 -70 -10 l-70 0 0 -145 c0 -122 -2 -145 -15 -145 -12 0 -15 14 -15 65 0 37
-4 65 -10 65 -6 0 -10 -28 -10 -65 0 -51 -3 -65 -15 -65 -13 0 -15 21 -15 130
0 80 -4 130 -10 130 -6 0 -10 -27 -10 -60 0 -33 -4 -60 -10 -60 -15 0 -13 143
2 158 20 20 35 14 48 -18z"
                                                    />
                                                </g>
                                            </svg>
                                            <span className="px-1">
                                                {props.docenteEvento}
                                            </span>
                                        </p>
                                        <p className="fs-6 text ">
                                            <svg
                                                version="1.0"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20.000000pt"
                                                height="20.000000pt"
                                                viewBox="0 0 50.000000 50.000000"
                                                preserveAspectRatio="xMidYMid meet"
                                            >
                                                <g
                                                    transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                                                    fill="#000000"
                                                    stroke="none"
                                                >
                                                    <path
                                                        d="M191 483 c-56 -29 -76 -65 -76 -133 1 -50 8 -73 48 -152 26 -51 56
-104 67 -118 l20 -25 20 25 c41 52 111 205 116 255 12 116 -98 199 -195 148z
m114 -19 c45 -21 69 -73 61 -133 -5 -43 -67 -180 -101 -225 -15 -20 -15 -20
-30 0 -34 43 -98 185 -102 227 -12 107 78 176 172 131z"
                                                    />
                                                    <path
                                                        d="M205 395 c-14 -13 -25 -33 -25 -45 0 -11 11 -32 25 -45 13 -14 33
-25 45 -25 27 0 70 43 70 70 0 27 -43 70 -70 70 -11 0 -32 -11 -45 -25z m79
-11 c31 -30 9 -84 -34 -84 -24 0 -50 26 -50 50 0 24 26 50 50 50 10 0 26 -7
34 -16z"
                                                    />
                                                    <path
                                                        d="M89 145 c-99 -31 -102 -88 -7 -121 75 -26 261 -26 336 0 97 33 92 90
-11 121 -59 18 -67 18 -67 5 0 -5 15 -12 34 -15 40 -8 96 -40 96 -55 0 -6 -21
-21 -47 -33 -41 -19 -66 -22 -173 -22 -107 0 -132 3 -172 22 -27 12 -48 27
-48 33 0 15 56 47 96 55 19 3 34 10 34 15 0 13 -15 12 -71 -5z"
                                                    />
                                                </g>
                                            </svg>
                                            <span className="px-1">
                                                {props.localEvento}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <p className="fs-6 text">
                                            <svg
                                                version="1.0"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16.000000pt"
                                                height="16.000000pt"
                                                viewBox="0 0 50.000000 50.000000"
                                                preserveAspectRatio="xMidYMid meet"
                                            >
                                                <g
                                                    transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                                                    fill="#000000"
                                                    stroke="none"
                                                >
                                                    <path
                                                        d="M142 357 c-67 -67 -122 -127 -122 -132 0 -13 192 -205 205 -205 6 0
65 55 133 123 l122 122 0 96 c0 60 -4 99 -12 107 -8 8 -47 12 -108 12 l-95 0
-123 -123z m318 10 l0 -92 -120 -120 -120 -120 -92 93 -93 92 120 120 120 120
92 0 93 0 0 -93z"
                                                    />
                                                    <path
                                                        d="M360 415 c-26 -32 13 -81 48 -59 22 14 27 41 12 59 -16 19 -44 19
-60 0z m46 -16 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z"
                                                    />
                                                </g>
                                            </svg>
                                            <span className="px-2">
                                                {props.categEvento}
                                            </span>
                                        </p>
                                        <p className="fs-6 text">
                                            <svg
                                                version="1.0"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16.000000pt"
                                                height="16.000000pt"
                                                viewBox="0 0 50.000000 50.000000"
                                                preserveAspectRatio="xMidYMid meet"
                                            >
                                                <g
                                                    transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                                                    fill="#000000"
                                                    stroke="none"
                                                >
                                                    <path
                                                        d="M103 481 c-4 -14 -15 -21 -42 -23 l-36 -3 0 -215 0 -215 225 0 225 0
0 215 0 215 -36 3 c-27 2 -38 9 -42 23 -7 26 -47 25 -54 -1 -5 -18 -14 -20
-93 -20 -79 0 -88 2 -93 20 -7 26 -47 27 -54 1z m37 -31 c0 -16 -4 -30 -10
-30 -5 0 -10 14 -10 30 0 17 5 30 10 30 6 0 10 -13 10 -30z m240 0 c0 -16 -4
-30 -10 -30 -5 0 -10 14 -10 30 0 17 5 30 10 30 6 0 10 -13 10 -30z m-277 -30
c3 -12 14 -20 27 -20 13 0 24 8 27 20 5 18 14 20 93 20 79 0 88 -2 93 -20 3
-12 14 -20 27 -20 13 0 24 8 27 20 4 14 14 20 34 20 26 0 29 -3 29 -35 l0 -35
-210 0 -210 0 0 35 c0 32 3 35 29 35 20 0 30 -6 34 -20z m357 -225 l0 -155
-210 0 -210 0 0 155 0 155 210 0 210 0 0 -155z"
                                                    />
                                                    <path
                                                        d="M100 195 l0 -115 150 0 150 0 0 115 0 115 -150 0 -150 0 0 -115z m70
70 c0 -20 -5 -25 -25 -25 -20 0 -25 5 -25 25 0 20 5 25 25 25 20 0 25 -5 25
-25z m70 0 c0 -20 -5 -25 -25 -25 -20 0 -25 5 -25 25 0 20 5 25 25 25 20 0 25
-5 25 -25z m70 0 c0 -20 -5 -25 -25 -25 -20 0 -25 5 -25 25 0 20 5 25 25 25
20 0 25 -5 25 -25z m70 0 c0 -20 -5 -25 -25 -25 -20 0 -25 5 -25 25 0 20 5 25
25 25 20 0 25 -5 25 -25z m-210 -70 c0 -20 -5 -25 -25 -25 -20 0 -25 5 -25 25
0 20 5 25 25 25 20 0 25 -5 25 -25z m70 0 c0 -20 -5 -25 -25 -25 -20 0 -25 5
-25 25 0 20 5 25 25 25 20 0 25 -5 25 -25z m70 0 c0 -20 -5 -25 -25 -25 -20 0
-25 5 -25 25 0 20 5 25 25 25 20 0 25 -5 25 -25z m70 0 c0 -20 -5 -25 -25 -25
-20 0 -25 5 -25 25 0 20 5 25 25 25 20 0 25 -5 25 -25z m-210 -70 c0 -20 -5
-25 -25 -25 -20 0 -25 5 -25 25 0 20 5 25 25 25 20 0 25 -5 25 -25z m70 0 c0
-20 -5 -25 -25 -25 -20 0 -25 5 -25 25 0 20 5 25 25 25 20 0 25 -5 25 -25z
m70 0 c0 -20 -5 -25 -25 -25 -20 0 -25 5 -25 25 0 20 5 25 25 25 20 0 25 -5
25 -25z m70 0 c0 -20 -5 -25 -25 -25 -20 0 -25 5 -25 25 0 20 5 25 25 25 20 0
25 -5 25 -25z"
                                                    />
                                                </g>
                                            </svg>
                                            <span className="px-2">
                                                {props.dataEvento}
                                            </span>
                                        </p>
                                    </div>

                                    <div>
                                        <p className="h5">
                                            Descrição do evento:{' '}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-muted">
                                            {props.descEvento}
                                        </p>
                                    </div>

                                    <p className="h6">Fotos: </p>

                                    <Carousel idEvento={props.idRouter} />

                                    <form
                                        onSubmit={handleSubmit(cadastrarFoto)}
                                    >
                                        <div className="fields mb-3 custom-file">
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                id="customFileLang"
                                                lang="pt-br"
                                                onChange={handleChange}
                                                multiple={false}
                                            />
                                            <label className="custom-file-label">
                                                {file ? file.name : ''}
                                            </label>
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
        </>
    );
}
