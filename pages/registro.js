import styles from '../styles/Home.module.css';
import ConteudoCadastro from '../src/components/ConteudoCadastro';
import HeaderSetaELogo from '../src/components/HeaderSetaELogo';
import CriarUsuario from '../src/components/ConteudoCadastro';

export default function Registro() {
    return (
        <div>
            <HeaderSetaELogo hrefSeta="/"/>
            <CriarUsuario
                classeDiv={styles.white}
                titulo="Cadastro"
                tipoBtn="submit"
                nomeBtn="Enviar"
                formBtn="btn btn-lg m-1 btn-primary"
            />
        </div>
    );
}
