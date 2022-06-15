import CardsEventos from "../src/components/CardsEventos";
import HeaderHoje from "../src/components/HeaderHoje";
import BotaoEvento from "../src/components/BotaoEvento";
import styles from '../styles/Home.module.css'


export default function eventosPassados() {
  <style jsx global> {`body {background-color: #FFFFFF;`}</style>
  return (
    <div>
        <HeaderHoje formPassados={styles.navActive} formHoje={styles.navCustomLink} formChegando={styles.navCustomLink} headerBg={styles.navBg} />
        <CardsEventos tituloEvento="Cultura Ágil" dataEvento="28/06/2022 - 19:00 " localEvento="Auditório, Positivo - Londrina" categEvento="Tecnologia" hrefBtn="/detalhes" tipoBtn="submit" nomeBtn="Visualizar" formBtn="btn btn-primary btn-lg m-1 w-40"/>
       <BotaoEvento  titulo="#" hrefBtn="/eventos" tipoBtn="submit" nomeBtn="Entrar" formBtn="btn btn-primary btn-lg m-1 w-50" />
    </div>
  );
}