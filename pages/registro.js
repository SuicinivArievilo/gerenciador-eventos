import styles from '../styles/Home.module.css';
import ConteudoCadastro from '../src/components/ConteudoCadastro';
import HeaderSetaELogo from '../src/components/HeaderSetaELogo';
import CriarUsuario from '../src/components/ConteudoCadastro';

export default function Registro() {
    return (
        <div>
            <title>Registrar-se</title>
            <style jsx global>
                {`
                    body {
                        background-color: #fff;
                    }
                `}
            </style>
            <HeaderSetaELogo hrefSeta="/" />
            <CriarUsuario
                classeDiv={styles.white}
                titulo="Cadastro"
                tipoBtn="submit"
                nomeBtn="Confirmar"
                formBtn="col-8 btn btn-primary btn-lg mt-4"
            />
        </div>
    );
}
