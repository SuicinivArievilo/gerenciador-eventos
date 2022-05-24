import Link from 'next/link'


export default function LinkNX(props) {

    return (
        <>
            <Link className={props.formLink} href={props.hrefLink}>{props.nomeLink}</Link>
        </>
    )
}