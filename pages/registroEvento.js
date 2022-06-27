import styles from '../styles/Home.module.css';
import ConteudoCadastroEvento from '../src/components/ConteudoCadastroEvento';
import HeaderSetaELogo from '../src/components/HeaderSetaELogo';

export default function RegistroEvento() {
    return (
        <div>
            <HeaderSetaELogo BtnBack={'/eventos'} />
            <ConteudoCadastroEvento
                classeDiv={styles.white}
                titulo="Novo Evento"
                tipoBtn="submit"
                nomeBtn="Enviar"
                formBtn="btn btn-lg m-1 btn-primary"
            />
        </div>
    );
}
