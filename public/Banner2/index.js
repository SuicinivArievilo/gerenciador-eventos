import Image from 'next/image'
import BannerPng2 from './banner2.png'


export default function CardImage2() {

    return ( 
        <Image src={BannerPng2}
        alt={"Banner2"}
        />
    )
}