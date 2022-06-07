import HeaderSetaELogo from "../src/components/HeaderSetaELogo";
import CardsEventos from "../src/components/CardsEventos";
import HeaderHoje from "../src/components/HeaderHoje";
import BotaoEvento from "../src/components/BotaoEvento";



export default function eventosChegando() {
  return (
    <div>
        <HeaderHoje />
        <CardsEventos tituloEvento="Cultura Ágil" dataEvento="28/06/2022 - 19:00 " localEvento="Auditório, Positivo - Londrina" categEvento="Tecnologia"/>
       <BotaoEvento  titulo="#" hrefBtn="/eventos" tipoBtn="submit" nomeBtn="Entrar" formBtn="btn btn-primary btn-lg m-1 w-50" />
    </div>
  );
}