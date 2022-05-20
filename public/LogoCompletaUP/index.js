import Image from 'next/image'
import Logo from './logoup.svg'


export default function LogoCompleta (props) {
    return (
        <div className={props.classe} >
        <Image src={Logo} 
        width={190}
        height={60}
        />

        </div>

    )
}