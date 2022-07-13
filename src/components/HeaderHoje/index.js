import LinkNX from "../LinkNX";

export default function HeaderHoje(props) {
  return (
      <>
          <nav className="fixed-top navbar navbar-dark justify-content-center bg-primary">
              <div>
                  <ul className="nav nav-pills mb-2" role="tablist">
                      <li className="nav-item">
                          <LinkNX
                              hrefLink="/eventosPassados"
                              nomeLink="Passados"
                              formLink={props.formPassados}
                          />
                      </li>
                      <li className="nav-item">
                          <LinkNX
                              hrefLink="/eventos"
                              nomeLink="Hoje"
                              formLink={props.formHoje}
                          />
                      </li>
                      <li className="nav-item">
                          <LinkNX
                              hrefLink="/eventosChegando"
                              nomeLink="Chegando"
                              formLink={props.formChegando}
                          />
                      </li>
                  </ul>
                  <div className="tab-content">
                      <div
                          className="tab-pane fade show active"
                          role="tabpanel"
                      ></div>
                      <div className="tab-pane fade" role="tabpanel"></div>
                      <div className="tab-pane fade" role="tabpanel"></div>
                  </div>
              </div>
          </nav>
          <div className="mb-5 pb-2">⠀</div>
      </>
  );
}