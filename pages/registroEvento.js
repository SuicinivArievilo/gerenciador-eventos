import styles from '../styles/Home.module.css';
import ConteudoCadastroEvento from '../src/components/ConteudoCadastroEvento';
import HeaderSetaELogo from '../src/components/HeaderSetaELogo';

export default function RegistroEvento() {
    return (
        <div>
            <title>Novo Evento</title>
            <HeaderSetaELogo hrefSeta="/eventos" />
            <ConteudoCadastroEvento
                classeDiv={styles.white}
                titulo="Novo Evento"
                tipoBtn="submit"
                nomeBtn="Cadastrar"
                formBtn="btn btn-lg btn-primary p-2 pl-4 pr-4 mb-1"
            />
        </div>
    );
}
