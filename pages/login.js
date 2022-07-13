import styles from '../styles/Home.module.css';
import HeaderSetaELogo from '../src/components/HeaderSetaELogo';
import ConteudoLogin from '../src/components/ConteudoLogin';

export default function Login() {
    return (
        <div>
            <title>Login</title>
            <style jsx global>
                {`
                    body {
                        background-color: #fff;
                    }
                `}
            </style>
            <HeaderSetaELogo hrefSeta="/" />
            <ConteudoLogin
                classeDiv={styles.white}
                titulo="Login"
                hrefBtn="/eventos"
                nomeBtn="Entrar"
                formBtn="col-8 btn btn-primary btn-lg mt-4 "
            />
        </div>
    );
}
