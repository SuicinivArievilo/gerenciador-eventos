import LinkNX from "../src/components/Link"
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import LogoCompleta from '../public/LogoCompletaUp'
import ConteudoLogin from '../src/components/ConteudoLogin'

export default function Login() {
    return (
        <div>
            <LogoCompleta classe={styles.logo} />
            <ConteudoLogin classeDiv={styles.white} titulo="Login" href='/login' tipo='submit' nomeLink='Entrar' formatacao='btn btn-primary btn-lg m-1' />
        </div>
    )
}