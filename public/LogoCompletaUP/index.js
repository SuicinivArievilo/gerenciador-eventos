import Image from 'next/image'
import Logo from './logoup.svg'


export default function LogoCompleta(props) {
    return (
        <div className={props.classe} >
            <a href="/">
                <Image src={Logo}
                    width={190}
                    height={60}
                    alt={"Logo Cruzeiro do sul e positivo"}
                />
            </a>
        </div>

    )
}