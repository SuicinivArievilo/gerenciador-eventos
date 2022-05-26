import SetaVoltar from "../../../public/SetaVoltar";
import LogoCompleta from '../../../public/LogoCompletaUp'
import Styles from '../../../styles/Home.module.css'


export default function HeaderSetaELogo() {
  return (
      
    <div className="px-2 d-flex justify-content-between w-100">
        
    <style jsx> {`div {background-color: #023160;} `} </style>

     

   
      <SetaVoltar classSeta={Styles.mediaHeader}/>
      <LogoCompleta classLogo={Styles.mediaHeader}/>
      
     
    </div>

        
  );
}