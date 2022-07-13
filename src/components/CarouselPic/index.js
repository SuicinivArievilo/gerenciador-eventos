import Image from 'next/image';
import axios from '../../services/axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useState, useEffect } from 'react';

export default function Carousel(props) {

    const [urlImagens, setURL] = useState([]);
    useEffect(() => {
        const idEvento = props.idEvento;

        if (idEvento !== undefined) {
            try {
                axios.get(`/fotosEvento/${idEvento}`).then((response) => {
                    setURL(response.data);
                });
            } catch (error) {
                console.log('Erro ao renderizar imagem' + error);
            }
        }
        //eslint-disable-next-line
    }, []);

    return (
        <div className="mb-3 mt-3">
            <Swiper
                slidesPerView={1}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {urlImagens?.map((url) => (
                    <div key={url._id} className="card-body">
                        <SwiperSlide key={url._id}>
                            <Image
                                src={url.url}
                                alt={'Banner'}
                                key={url._id}
                                objectFit="cover"
                                width={1920}
                                height={1080}
                            />
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </div>
    );
}
