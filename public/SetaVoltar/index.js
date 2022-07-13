import {useRouter} from 'next/router'
import style from '../../styles/Home.module.css'



export default function SetaVoltar(props) {
    const router = useRouter()
    return (
        <button
            type="button"
            className={style.buttonBack}
            onClick={() => router.back()}
        >
            <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="38.000000pt"
                height="38.000000pt"
                viewBox="0 0 50.000000 50.000000"
                preserveAspectRatio="xMidYMid meet"
            >
                <g
                    transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                    fill="#E8E8E8"
                    stroke="none"
                >
                    <path
                        d="M135 310 l-60 -60 62 -62 c34 -34 66 -59 70 -55 4 4 -15 30 -42 57
l-49 50 152 0 c95 0 152 4 152 10 0 6 -57 10 -152 10 l-152 0 47 48 c26 26 47
51 47 55 0 17 -19 3 -75 -53z"
                    />
                </g>
            </svg>
        </button>
    );
}