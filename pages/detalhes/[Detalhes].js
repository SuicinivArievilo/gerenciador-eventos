import HeaderSetaELogo from '../../src/components/HeaderSetaELogo';
import DescricaoEvento from '../../src/components/DetalhesEvento';
import BotaoEvento from '../../src/components/BotaoEvento';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Detalhes() {
  const router = useRouter();

  const idRouter = router.query.Detalhes;

  console.log('Esse é o ID Router ->:' + idRouter);

  const [detalhes, setDetalhes] = useState([]);
  useEffect(() => {
    if (idRouter != undefined) {

      axios
        .get(`http://18.231.37.81:3000/evento/${idRouter}`)
        .then((response) => {
          setDetalhes(response.data);

        });

      console.log(detalhes)
    }
    

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idRouter]);
1



  return (
    <div>
      <HeaderSetaELogo BtnBack="/eventos" />
      <DescricaoEvento

         key={detalhes?._id}
         tituloEvento={detalhes?.nome}
        //  docenteEvento={StringDetails}
         dataEvento={detalhes?.data}
         localEvento={detalhes?.local}
         categEvento={detalhes?.categoria}
         descEvento={detalhes?.descricao}
      />

      <BotaoEvento
        titulo="#"
        hrefBtn="/eventos"
        tipoBtn="submit"
        nomeBtn="Entrar"
        formBtn="btn btn-primary btn-lg m-1 w-50"
      />
    </div>
  );
}

