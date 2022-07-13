import axios from '../../../src/services/axios';
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';
import HeaderSetaELogo from '../../../src/components/HeaderSetaELogo';



export default function Relatorio(props) {

    const router = useRouter();

    const idRouter = router.query.Relatorio;


    const [user, setUser] = useState([]);

     useEffect (() => {


        if (idRouter !== undefined){
     axios.get('/checkinsEventoID/'+idRouter)
     .then((response) => {
         setUser(response.data);
         console.log(response.data)

     }
     )
     .catch((error) => {
         console.log(error);
     }
     )
    
    }

        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);



    return (
     
             <div> 
                 <HeaderSetaELogo/>
                <h1 className='text-center'>Relatório</h1>
        
               
                    
             </div>
        

        )
}