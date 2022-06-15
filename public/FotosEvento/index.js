import Image from 'next/image'
import FotoPng from './foto.png'


export default function FotoEvento() {

    return ( 
        <Image src={FotoPng}
        alt={"Foto"}
        width={150} 
        height={90}
        />
    )
    
}