
import Image from 'next/image'
import BotaoIcon from "./Botao.png"
import Link from 'next/link'

export default function BotaoEvento(props) {

    return (
        <div className="col-md-12 text-center">
        <Link href="/registroEvento">
        <a className="" >
        <Image className="img-responsive" src={BotaoIcon} width={70} height={65} alt="Imagen logo botao" />
        </a>
    </Link>
    </div>

    )
}