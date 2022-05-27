import Head from 'next/head'
import LinkBtn from '../LinkBotao'

import '../../../styles/Home.module.css'

export default function ConteudoCadastroEvento(props) {

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
                                <form>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input className='form-control' type="text" name="name" placeholder="Nome" required />
                                        </div>
                                    </div>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input className='form-control' type="date" name="data" placeholder="Data" />
                                        </div>
                                    </div>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descrição"></textarea>
                                        </div>
                                    </div>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input className='form-control' type="text" name="content" placeholder="Categoria" />
                                        </div>
                                    </div>
                                    <div className="fields mb-3 borda">
                                        <div className="field name">
                                            <input className='form-control' type="text" name="local" placeholder="Local" />
                                        </div>
                                    </div><br></br><br></br>
                                    <div className="mb-3">
                                            <h4>Banner do Evento</h4>
                                            <input className="form-control" type="file" id="formFile"/>
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