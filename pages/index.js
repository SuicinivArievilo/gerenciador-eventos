import styles from '../styles/Home.module.css'
import LogoCompleta from '../public/LogoCompletaUp'
import ConteudoHomePage from '../src/components/ConteudoHomePage'
import {destroyCookie ,setCookie} from 'nookies'

destroyCookie(undefined, 'nextauth.token')



export default function Home() {


  return (
      <div className={styles.blue}>
          <title>Gerenciador de Eventos - UP</title>
          <style jsx global>
              {`
                  body {
                      background-color: #023160;
                  }
                  a {
                      text-decoration: underline;
                  }
              `}
          </style>
          <div>⠀</div>
          <LogoCompleta classLogo={styles.logo} />
          <ConteudoHomePage
              classeDiv={styles.blue}
              titulo="Bem-vindo!"
              formBtn="col-6 btn btn-light btn-lg mb-2"
              hrefBtn="/login"
              nomeBtn="Entrar"
              tipoBtn="submit"
              formLink="text-light fs-6 px-3"
              hrefLink="/registro"
              nomeLink="Registrar-se"
              texto="Consulte e gerencie seus eventos presenciais, híbridos e virtuais a partir de uma única plataforma"
          />
      </div>
  );
}
