import CardImage from "../../../public/Banner";
import LocalIcon from "./Local.png";
import Image from 'next/image'


export default function CardsEventos(props) {
  return (
    <div>
      <style jsx global> {`body {background-color: #FFFFFF;`}</style>
    

      <div className="album py-5 bg-light">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <CardImage/>
            <div className="card-body">
                <h5 className="card-title text-center">{props.tituloEvento}</h5>
                <p className ="fs-6 text"><Image src={LocalIcon} width={16} height={16} alt="Imagen logo local"/>{props.dataEvento}</p>
              <div className="d-flex justify-content-end align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-primary">Visualizar</button>
                  {/* <button type="button" className="btn btn-sm btn-outline-secondary">Editar</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
         </div>
        </div>
      </div>


    </div>
  );
}
