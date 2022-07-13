import Image from 'next/image'
import style from '../../styles/Home.module.css'
import axios from '../../src/services/axios'
import { useState, useEffect } from 'react'



export default function CardImage(props) {
    	
    const [urlBanner, setURL] = useState([]);
    useEffect(() => {

        const idEvento = props.idEvento;

            if (idEvento !== undefined) {
            try {
                axios.get(`/fotosEventoBanner/${idEvento}`)
                .then((response) => {
                    setURL(response.data);
                }
                )
            } catch (error) {
                console.log("Erro ao renderizar imagem"+error);
            }
           
        }
        //eslint-disable-next-line
    }, []);


    return (
        <div className={style.roundedBanner}>
            {urlBanner.map((url) => (
                <Image
                    src={url.url}
                    alt={'Banner'}
                    key={url._id}
                    width={1920}
                    height={1080}
                />
            ))}
        </div>
    );
}


