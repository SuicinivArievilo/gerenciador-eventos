
import Image from 'next/image'
import BotaoIcon from "./Botao.png"
import Link from 'next/link'

export default function BotaoEvento(props) {

    return (
        <div class="col-md-12 text-center">
        <Link href="/registroEvento">
        <a className="" >
        <Image class="img-responsive" src={BotaoIcon} width={55} height={55} left={50} alt="Imagen logo botao" />
        </a>
    </Link>
    </div>

    )
}