import Link from 'next/link'

export default function LinkBtn(props) {

    return (
        <>
            <Link href={props.hrefBtn}><button className={props.formBtn} type={props.tipoBtn}>{props.nomeBtn}</button></Link>

        </>
    )
}