import Image from 'next/image'
import BannerPng from './banner.png'


export default function CardImage() {

    return ( 
        <Image src={BannerPng}
        alt={"Banner"}
        />
    )
}

