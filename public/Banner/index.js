import Image from 'next/image'
import BannerPng from './banner.png'
import style from '../../styles/Home.module.css'


export default function CardImage() {

    return ( 
        <div className={style.roundedBanner}>
        <Image src={BannerPng}
        alt={"Banner"}
        width={500} 
        height={244}
        />
        </div>
    )
    
}


