import Link from 'next/link'

export default function BotaoEvento(props) {

    return (
        <div className="col-md-12 text-center">
            <Link href="/registroEvento">
                <a className="btn btn-primary btn-lg m-1 w-40 rounded2">+</a>
                
            </Link>
        </div>

    )
}