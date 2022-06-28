import Image from 'next/image'
import BannerPng from './banner.png'
import style from '../../styles/Home.module.css'


export default function CardImage() {

    return ( 
        <div className={style.roundedBanner}>
        <Image src="https://uploadfotoseventos.s3-sa-east-1.amazonaws.com/6502b042a041d7bfa536979335fb86e4-E3Floor03-1.jpg"
        alt={"Banner"}
        width={500} 
        height={244}
        />
        </div>
    )
    
}


