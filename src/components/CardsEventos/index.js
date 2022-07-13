import CardImage from '../../../public/CardImage';
import LinkBtn from '../LinkBotao';
import style from '../../../styles/Home.module.css';

export default function CardsEventos(props) {
    return (
        <div className="col-md-12 bg-white">
            <div className="container col-md-5 mt-3 mb-4 shadow-sm card-header">
                <div className="text-center img-fluid pt-1">
                    <CardImage idEvento={props.idEvento} />
                </div>
                <div className="col-md-12">
                    <h2 className="mt-2 text-center font-weight-normal">
                        {props.tituloEvento}
                    </h2>
                </div>

                <div className="mt-3">
                    <div className="pt-2 pb-2">
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
                        <span className="pl-2">{props.dataEvento}</span>
                    </div>

                    <div className="pt-2 pb-2">
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
                        <span className="pl-2">{props.localEvento}</span>
                    </div>
                    <div className="pt-2">
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

                        <span className="pl-2">{props.categEvento}</span>
                    </div>
                </div>

                <div className="text-right">
                    <LinkBtn
                        hrefBtn={props.hrefBtn}
                        nomeBtn={props.nomeBtn}
                        tipoBtn={props.tipoBtn}
                        formBtn={props.formBtn}
                    />
                </div>
            </div>
        </div>
    );
}
