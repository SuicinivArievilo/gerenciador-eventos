import '../../../styles/Home.module.css'
import LinkBtn from '../LinkBotao'
import LinkNX from '../LinkNX'



export default function ConteudoHomePage(props) {

    return (
        <div className={props.classeDiv}>
            <div className="container col-md-4 mt-5">
                <div>⠀</div>
                <h1 className="text-white display-4 text-center mt-3">
                    {props.titulo}
                </h1>
                <div>⠀</div>
                <p className="text-white text-center mt-5 display-5">
                    {props.texto}
                </p>
                <div className="text-center">
                    <div className="mt-5 pt-5">
                        <LinkBtn
                            hrefBtn={props.hrefBtn}
                            nomeBtn={props.nomeBtn}
                            formBtn={props.formBtn}
                            tipoBtn={props.tipoBtn}
                        />
                    </div>
                    <div className=" mt-3">
                        <p className="text-light text-center">
                            Ainda não possui conta?
                            <LinkNX
                                hrefLink={props.hrefLink}
                                nomeLink={props.nomeLink}
                                formLink={props.formLink}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}