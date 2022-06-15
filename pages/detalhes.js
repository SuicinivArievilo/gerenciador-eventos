import HeaderSetaELogo from "../src/components/HeaderSetaELogo";
import DescricaoEvento from "../src/components/DetalhesEvento";
import BotaoEvento from "../src/components/BotaoEvento";



export default function detalhes() {
  return (
    <div>
        <HeaderSetaELogo/>
        <DescricaoEvento tituloEvento="Cultura Ágil" docenteEvento="Prof.Helton Azevedo" dataEvento="28/06/2022 - 19:00 " localEvento="Auditório, Positivo - Londrina" categEvento="Tecnologia"/>
        <BotaoEvento titulo="#" hrefBtn="/eventos" tipoBtn="submit" nomeBtn="Entrar" formBtn="btn btn-primary btn-lg m-1 w-50" />
    </div>
  );
}