import Link from 'next/link';

export default function LinkBtn(props) {
    const possuiHref = !!props.hrefBtn;
    const botaoContainer = (
        <button
            onClick={props.onClick}
            className={props.formBtn}
            type={props.tipoBtn}
        >
            {props.nomeBtn}
        </button>
    );

    if (possuiHref) return <Link href={props.hrefBtn}>{botaoContainer}</Link>;

    return <>{botaoContainer}</>;
}
