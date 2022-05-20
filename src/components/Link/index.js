import Link from 'next/link'

export default function LinkNX (props) {

    return(
        <>
        <Link href={props.href}>{props.nomeLink}</Link>
        </>
    )
}