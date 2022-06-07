import styles from '../styles/Home.module.css'
import LogoCompleta from '../public/LogoCompletaUp'
import ConteudoHomePage from '../src/components/ConteudoHomePage'





export default function Home() {
  return (
    <div className={styles.blue}>
      <style jsx global> {`body {background-color: #023160;`}</style>
      <LogoCompleta classLogo={styles.logo}/>

      <ConteudoHomePage classeDiv={styles.blue} titulo="Bem vindo!" formBtn=" col-8 h-25 btn btn-light btn-lg m-1" hrefBtn="/login" nomeBtn="Entrar" tipoBtn="submit" formLink="text-light fs-6 text ms-1" hrefLink="/registro" nomeLink="Registrar-se" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />

    </div>       
  )
}
