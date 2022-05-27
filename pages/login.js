
import styles from "../styles/Home.module.css"
import "bootstrap/dist/css/bootstrap.css"
import HeaderSetaELogo from "../src/components/HeaderSetaELogo"
import ConteudoLogin from "../src/components/ConteudoLogin"

export default function Login() {
    return (
        <div>


            <HeaderSetaELogo/>
            <ConteudoLogin classeDiv={styles.white} titulo="Login" hrefBtn="/eventos" tipoBtn="submit" nomeBtn="Entrar" formBtn="btn btn-primary btn-lg m-1 w-50" />
            
        </div>
    )
}