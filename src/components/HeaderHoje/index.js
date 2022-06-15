import LinkNX from "../LinkNX";

export default function HeaderHoje(props) {
  return (
    <div className={props.headerBg}>
    <div className="px-2 d-flex justify-content-between w-100" >

      <header className=" masthead d-flex w-100 h-100 p-2 flex-column">
        <div className="nav  nav-masthead justify-content-center ">
          <div className={props.headerBg}>
          <ul className="nav nav-pills mb-2" role="tablist">
            <li className="nav-item">
              <LinkNX hrefLink="/eventosPassados" nomeLink="Passados" formLink={props.formPassados} />
            </li>
            <li className="nav-item">
              <LinkNX hrefLink="/eventos" nomeLink="Hoje" formLink={props.formHoje} />
            </li>
            <li className="nav-item">
              <LinkNX hrefLink="/eventosChegando" nomeLink="Chegando" formLink={props.formChegando} />
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" role="tabpanel"></div>
            <div className="tab-pane fade" role="tabpanel"></div>
            <div className="tab-pane fade" role="tabpanel"></div>
          </div>
          </div>
        </div>
      </header>
    </div>
    </div>
  );
}