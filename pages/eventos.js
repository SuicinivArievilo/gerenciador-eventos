import CardsEventos from "../src/components/CardsEventos";
import HeaderHoje from "../src/components/HeaderHoje";
import BotaoEvento from "../src/components/BotaoEvento";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Eventos() {

  const [eventos, setEventos] = useState([]);
  useEffect(() => {
    axios.get("https://eventos-api.vercel.app/evento").then((response) => { 
      setEventos(response.data);
    });
    console.log(eventos);

    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <HeaderHoje/>

      {eventos?.map((evento) => (
        <CardsEventos key={evento._id} tituloEvento={evento.nome} dataEvento={evento.data} localEvento={evento.local} categEvento={evento.categoria} />
      ))}

      <BotaoEvento titulo="#" hrefBtn="/eventos" tipoBtn="submit" nomeBtn="Entrar" formBtn="btn btn-primary btn-lg m-1 w-50" />
    </div>

  );
};