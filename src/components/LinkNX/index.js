import Link from 'next/link'


export default function LinkNX(props) {

    return (
        <>
            <Link  href={props.hrefLink}>
                <a className={props.formLink}>{props.nomeLink}</a></Link>
        </>
    )
}