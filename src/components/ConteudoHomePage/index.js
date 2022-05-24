import '../../../styles/Home.module.css'
import LinkBtn from '../LinkBotao'
import LinkNX from '../LinkNX'



export default function ConteudoHomePage(props) {

    return (
        <div className={props.classeDiv}>
            <div className='container-md'>
                <h1 className='text-white display-1 pt-5 text-center'>{props.titulo}</h1>

                <p className='text-white text-center pt-2'>{props.texto}</p>
                <div className='py-5 text-center container'>
                    <LinkBtn hrefBtn={props.hrefBtn} nomeBtn={props.nomeBtn} formBtn={props.formBtn} tipoBtn={props.tipoBtn} />
                    
                    <LinkNX hrefLink={props.hrefLink} nomeLink={props.nomeLink} formLink={props.formLink} />
                </div>
            </div>
        </div>
    )
}