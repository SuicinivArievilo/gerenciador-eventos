/* eslint-disable react-hooks/rules-of-hooks */
import HeaderSetaELogo from '../../src/components/HeaderSetaELogo';
import DescricaoEvento from '../../src/components/DetalhesEvento';
import BotaoEvento from '../../src/components/BotaoEvento';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from '/src/services/axios';

export default function Detalhes() {
  const router = useRouter();

  const idRouter = router.query.Detalhes;

  console.log('Esse é o ID Router ->:' + idRouter);

  const [detalhes, setDetalhes] = useState([]);
  useEffect(() => {
    if (idRouter != undefined) {

      axios
        .get(`/evento/${idRouter}`)
        .then((response) => {
          setDetalhes(response.data);

        });

      console.log(detalhes)
    }
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idRouter]);


const [usuarioDocente, setUsuarioDocente] = useState([]);
   useEffect(() => {
    if(detalhes.usuario != undefined){
      axios
        .get(`/usuario/${detalhes.usuario}`)
        .then((response) => {
          setUsuarioDocente(response.data);

        });
        console.log(usuarioDocente)
      }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detalhes.usuario]);


  return typeof detalhes.nome == 'undefined' ? (
    detalhes ? (
    <div>

<HeaderSetaELogo BtnBack="/eventos" />
<h1>infelizmente não encontramos um evento para essa pagina :(</h1>
      
    </div>
  ) : ( 
    <div>
      <HeaderSetaELogo BtnBack="/eventos" />
      <h1>infelizmente não encontramos um evento para essa pagina :(</h1>
    </div>
  )

) : <div>

<HeaderSetaELogo BtnBack="/eventos" />
      <DescricaoEvento

         key={detalhes?._id}
         tituloEvento={detalhes?.nome}
         docenteEvento={usuarioDocente?.nome}
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

  }
