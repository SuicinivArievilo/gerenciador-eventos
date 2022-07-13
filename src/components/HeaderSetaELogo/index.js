import SetaVoltar from "../../../public/SetaVoltar";
import LogoCompleta from '../../../public/LogoCompletaUp'
import Styles from '../../../styles/Home.module.css'



export default function HeaderSetaELogo(props) {
  return (
      <>
          <div className="pt-2 d-flex justify-content-between fixed-top">
              <style jsx>
                  {`
                      div {
                          background-color: #023160;
                      }
                  `}
              </style>

              <SetaVoltar
                  hrefSeta={props.hrefSeta}
                  classSeta={Styles.mediaHeader}
              />
              <LogoCompleta classLogo={Styles.classLogo} />
          </div>
          <div className="mb-5 pb-5">⠀</div>
      </>
  );
}