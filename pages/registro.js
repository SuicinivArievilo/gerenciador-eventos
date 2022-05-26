
import styles from '../styles/Home.module.css'
import ConteudoCadastro from '../src/components/ConteudoCadastro'
import HeaderSetaELogo from '../src/components/HeaderSetaELogo'

export default function Registro() {
    return (
        <div>
          <HeaderSetaELogo/>
          <ConteudoCadastro classeDiv={styles.white} titulo="Cadastro" hrefBtn='/login' tipoBtn='submit' nomeBtn='Enviar' formBtn='btn btn-lg m-1 btn-primary' />
        </div>
    )
}