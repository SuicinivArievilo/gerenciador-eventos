import styles from '../styles/Home.module.css'
import LogoCompleta from '../public/LogoCompletaUp'
import ConteudoHomePage from '../src/components/ConteudoHomePage'
import {destroyCookie ,setCookie} from 'nookies'

destroyCookie(undefined, 'nextauth.token')



export default function Home() {


  return (
      <main>
          <div className="bg-primary">
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
                  titulo="Bem-vindo!"
                  formBtn="col-6 btn bg-secondary btn-lg btn-ligth mb-2 text-primary font-weight-bold "
                  hrefBtn="/login"
                  nomeBtn="Entrar"
                  tipoBtn="submit"
                  formLink="text-light fs-6 px-3"
                  hrefLink="/registro"
                  nomeLink="Registrar-se"
                  texto="Consulte e gerencie seus eventos presenciais, híbridos e virtuais a partir de uma única plataforma"
              />
          </div>
      </main>
  );
}
