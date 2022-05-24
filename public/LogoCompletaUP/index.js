import Image from 'next/image'
import Logo from './logoup.svg'
import Link from 'next/link'




  

export default function LogoCompleta(props) {
    return (

        <Link href="/">

            <a>
                <Image src={Logo}
                width={190}
                height={60}
                alt={"Logo Cruzeiro do sul e positivo"}
                />
            </a>
                
        </Link>
        
    )
}