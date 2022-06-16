import CardImage from "../../../public/Banner";
import LocalIcon from "./Local.png";
import CalendarIcon from "./Calendar.png";
import TagIcon from "./Tag.png";
import Image from "next/image";
import LinkBtn from "../LinkBotao";

export default function CardsEventos(props) {
  return (
    <>
      <div className="album pt-3 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col p-2">
              <div className="card-header shadow-sm p-2 bg-body rounded">
                <CardImage />
                <div className="row justify-content-center">
                <h5 className="card-title text-center">
                        {props.tituloEvento}
                      </h5>
                  <div className="col-12 card-body">
                    <div className="justify-content-around row col-12">
                     <div className="col row w-100">
                      <p className="fs-6 text ">
                        <Image
                          src={CalendarIcon}
                          width={16}
                          height={16}
                          alt="Imagen logo calendar"
                        />
                        <span className="px-1">{props.dataEvento}</span>
                      </p>
                      </div>
                      <div className="row col-12 justify-content-between">
                      <div className="row col-7">
                      <p className="fs-6 text">
                        <Image
                          src={LocalIcon}
                          width={16}
                          height={16}
                          alt="Imagen logo local"
                        />
                        <span className="px-1">{props.localEvento}</span>
                      </p>
                      <p className="fs-6 text">
                        <Image
                          src={TagIcon}
                          width={16}
                          height={16}
                          alt="Imagen logo tag"
                        />
                        <span className="px-1">{props.categEvento}</span>
                      </p>
                     
                      </div>
                      <div className="d-flex justify-content-end flex-column col-5 ">
                        <div>
                          <LinkBtn hrefBtn={props.hrefBtn} nomeBtn={props.nomeBtn} tipoBtn={props.tipoBtn} formBtn={props.formBtn}/>
                          </div>
                        </div>
                    </div>
                    </div>
                    
  

                       
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
