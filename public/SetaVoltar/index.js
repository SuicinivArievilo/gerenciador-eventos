import Image from 'next/image'
import Link from 'next/link'
import Seta from './seta-voltar.png'


export default function SetaVoltar(props) {
    return (

        <Link href={props.BtnBack}>

            <a className={props.classSeta}>
                <Image src={Seta}
                width={50}
                height={50}
                alt={"Seta para a esquerda, voltar"}
                />
            </a>
                
        </Link>
        
    )
}