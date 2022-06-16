import CardImage from "../../../public/Banner";
import LocalIcon from "./Local.png";
import CalendarIcon from "./Calendar.png"
import TagIcon from "./Tag.png"
import Image from 'next/image'
import LinkBtn from "../LinkBotao";


export default function CardsEventos(props) {

  return (

    <>
      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card-header shadow-sm rounded rounded">
                <CardImage />
                <div className="card-body">
                  <h5 className="card-title text-center">{props.tituloEvento}</h5>
                  <p className="fs-6 text"><Image src={CalendarIcon} width={16} height={16} alt="Imagen logo calendar" />{props.dataEvento}</p>
                  <p className="fs-6 text"><Image src={LocalIcon} width={16} height={16} alt="Imagen logo local" />{props.localEvento}</p>
                  <p className="fs-6 text"><Image src={TagIcon} width={16} height={16} alt="Imagen logo tag" />{props.categEvento}</p>
                  <div className="d-flex justify-content-end align-items-center">
                    <div className="btn-group">
                      <LinkBtn hrefBtn={props.hrefBtn} nomeBtn={props.nomeBtn} tipoBtn={props.tipoBtn} formBtn={props.formBtn} />
                      {/* <button type="button" className="btn btn-sm btn-outline-secondary">Editar</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
