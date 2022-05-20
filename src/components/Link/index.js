import Link from 'next/link'

export default function LinkNX (props) {

    return(
        <>
        <Link href={props.href}><button className={props.formatacao}>{props.nomeLink}</button></Link>
        </>
    )
}