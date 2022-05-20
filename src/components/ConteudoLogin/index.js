import Head from 'next/head'
import LinkNX from '../Link'

import '../../../styles/Home.module.css'

export default function ConteudoLogin(props) {

    return (
        <div className={props.classeDiv}>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            </Head>
            <div className='container-md'>
                <h1 className='text-blue display-1 pt-5 text-center'>{props.titulo}</h1>
                <div className='py-5 text-center container'>
                    <div className="contact-content">
                        <div className="column right">
                            <div className='album py-5 container'>
                                <form>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input className='form-control' type="email" name="email" placeholder="E-mail" />
                                        </div>
                                    </div>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input className='form-control' type="password" name="content" placeholder="Senha" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <a href='#'><p>Esqueceu a senha?</p></a>
                    <LinkNX href={props.href} nomeLink={props.nomeLink} tipo={props.tipo} formatacao={props.formatacao} />

                </div>
            </div>
        </div>
    )
}