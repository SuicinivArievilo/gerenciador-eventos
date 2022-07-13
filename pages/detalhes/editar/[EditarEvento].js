import EditarEvento from "../../../src/components/ConteudoEditar"
import styles from '../../../styles/Home.module.css';
import HeaderSetaELogo from '../../../src/components/HeaderSetaELogo';
import { useRouter } from "next/router";



export default function Editar() {
    const router = useRouter();

    const idRouter = router.query.Detalhes;


    return (
        <div>
            <title>Editar Evento</title>
            <HeaderSetaELogo hrefSeta={'/detalhes' + idRouter} />
            <EditarEvento
                classeDiv={styles.white}
                titulo="Editar evento"
                tipoBtn="submit"
                nomeBtn="Enviar"
                formBtn="btn btn-lg m-1 btn-primary"
            />
        </div>
    );
} 