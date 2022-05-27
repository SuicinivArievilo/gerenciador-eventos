import HeaderSetaELogo from "../src/components/HeaderSetaELogo";
import CardsEventos from "../src/components/CardsEventos";
import LinkNX from "../src/components/LinkNX";




export default function eventos() {
  return (
    <div>

        <HeaderSetaELogo />
        <CardsEventos tituloEvento="Culturas Ágil" dataEvento="28/06/2022 - 19:00" />

   <LinkNX hrefLink="/registroEvento" nomeLink="Criar evento"/>

    </div>
  );
}