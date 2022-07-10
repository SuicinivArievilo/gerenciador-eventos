import styles from '../styles/Home.module.css'
import ConteudoRecuperarSenha from '../src/components/ConteudoRecuperarSenha'
import HeaderSetaELogo from '../src/components/HeaderSetaELogo'

export default function RecuperarSenha() {
    return (
        <div>
          <HeaderSetaELogo hrefSeta="/"/>
          <ConteudoRecuperarSenha classeDiv={styles.white} titulo="Recuperar Senha" hrefBtn='/recuperarSenha' tipoBtn='submit' nomeBtn='Recuperar' formBtn='btn btn-lg m-1 btn-primary' />
        </div>

        
    )
}