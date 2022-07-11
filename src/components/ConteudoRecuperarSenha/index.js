import Head from 'next/head'
import LinkBtn from '../LinkBotao'

import '../../../styles/Home.module.css'

export default function ConteudoRecuperarSenha(props) {

    return (
        <div className={props.classeDiv}>
            <Head>
                {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" /> */}
            </Head>
            <div className='container-md'>
                <h1 className='text-blue display-1 pt-5 text-center'>{props.titulo}</h1>
                <div className='py-5 text-center container'>
                    <div className="contact-content">
                        <div className="column right">
                            <div className='album py-5 container'>
                                <h5 id='h5'>Digite no campo abaixo o seu email cadastrado e em seguida click em recuperar para um retorno de uma nova senha</h5>
                                <br></br>
                                <form>
                                <div className="mb-3">
                                 <input type="email" className="form-control" id="emailSenha" placeholder="Digite o email cadastrado"></input>
                                 </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <LinkBtn hrefBtn={props.hrefBtn} nomeBtn={props.nomeBtn} tipoBtn={props.tipoBtn} formBtn={props.formBtn} />
                </div>
            </div>
        </div>
    )
}