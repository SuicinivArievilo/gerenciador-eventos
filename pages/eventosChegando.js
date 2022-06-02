import HeaderSetaELogo from "../src/components/HeaderSetaELogo";
import CardsEventos from "../src/components/CardsEventos";
import CardsEventos2 from "../src/components/CardsEventos2"
import HeaderHoje from "../src/components/HeaderHoje";
import BotaoEvento from "../src/components/BotaoEvento";



export default function eventosChegando() {
  return (
    <div>
       <HeaderSetaELogo />
        <HeaderHoje />
        <CardsEventos tituloEvento="Cultura Ágil" dataEvento="28/06/2022 - 19:00 " localEvento="Auditório, Positivo - Londrina" categEvento="Tecnologia"/>
        <CardsEventos2 tituloEvento2="O Humano Digital" dataEvento2="01/09/2022 - 19:00 hrs" localEvento2="Auditório, Positivo - Londrina" categEvento2="Tecnologia"/>
       <BotaoEvento  titulo="#" hrefBtn="/eventos" tipoBtn="submit" nomeBtn="Entrar" formBtn="btn btn-primary btn-lg m-1 w-50" />
    </div>
  );
}