import '../../../styles/Home.module.css'
import LinkNX from '../Link'



export default function ConteudoHomePage(props) {

    return (
        <div className={props.classeDiv}>
            <div className='container-md'>
                <h1 className='text-white display-1 pt-5 text-center'>{props.titulo}</h1>

                <p className='text-white text-center pt-2'>{props.texto}</p>
                <div className='py-5 text-center container'>
                    <LinkNX href={props.href} nomeLink={props.nomeLink} formatacao={props.formatacao} />
                    <LinkNX href={props.href1} nomeLink={props.nomeLink1} formatacao={props.formatacao1} />
                </div>
            </div>
        </div>
    )
}