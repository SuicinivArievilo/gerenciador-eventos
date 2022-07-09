import CardImage from "../../../public/Banner";
import LocalIcon from "./Local.png";
import CalendarIcon from "./Calendar.png";
import TagIcon from "./Tag.png";
import DocenteIcon from "./Docente.png";
import Image from 'next/image'
import FotoEvento from "../../../public/FotosEvento";


export default function DescricaoEvento(props) {
  
  return (
    
    <>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card-header shadow-sm p-1">
                <div className="card-body">
                <CardImage />
                  <h5 className="card-title text-center">{props.tituloEvento}</h5>
                  <p className="fs-6 text"><Image src={DocenteIcon} width={16} height={16} alt="Imagen logo docente" />{props.docenteEvento}</p>
                  <p className="fs-6 text"><Image src={CalendarIcon} width={16} height={16} alt="Imagen logo calendar" />{props.dataEvento}</p>
                  <p className="fs-6 text"><Image src={LocalIcon} width={16} height={16} alt="Imagen logo local" />{props.localEvento}</p>
                  <p className="fs-6 text"><Image src={TagIcon} width={16} height={16} alt="Imagen logo tag" />{props.categEvento}</p>
                  <div className="">
                  <p className="h5">Descrição do evento: </p>
                  </div>
                  <div>
                  <small className="text-muted">{props.descEvento}</small>
                  </div>
                  <p className="h6">Fotos: </p>  
                  <FotoEvento/> <FotoEvento/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
    
    )
    }