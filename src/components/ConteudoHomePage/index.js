import '../../../styles/Home.module.css'
import LinkNX from '../Link'



export default function ConteudoHomePage(props) {

    return (
        <div className={props.classeDiv}>
            <div class="container-md">
                <h1 className='text-white display-1 pt-5 text-center'>{props.titulo}</h1>

                <p className='text-white text-center pt-2'>{props.texto}</p>

                <LinkNX href={props.href} nomeLink={props.nomeLink} formatacao={props.formatacao} />
            </div>
        </div>
    )
}