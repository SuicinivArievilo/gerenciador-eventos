import LinkBtn from "../LinkBotao";
import { appendErrors, useForm } from 'react-hook-form';
import axios from '../../services/axios';
import {useState, useEffect} from 'react';
import {useRouter, Router} from 'next/router';
import moment from "moment";

export default function Checkin(props){
    const router = useRouter()
    

    const {
        register,
        handleSubmit: handleSubmitCheckin,
        formState: { errors2 }
    } = useForm({});

    const userTokenID = localStorage.getItem('usertoken');
    const [checkin, setCheckin] = useState([]);
    useEffect(() => {
            axios.post(
                'http://18.231.37.81:3000/checkinEfetuado', {
               usuario : userTokenID,
               evento : props.idRouter,
            } ).then(response => { 
                setCheckin(response.data);
                console.log(checkin);
            })
            //eslint-disable-next-line
        }, [checkin]);

        const dataEvento = props.dataEventoID;

    const realizarCheckin = async (data) => {
        await data;

        const idEvento = props.idRouter;
        const palavraChaveEvento = props.palavraChave;

        if (palavraChaveEvento == data.palavraChave) {
            axios.post(
                'http://18.231.37.81:3000/checkin',
                data,
                (data.evento = idEvento),
                (data.usuario = userTokenID)
                
            );
            router.reload();
            console.log(data);
        } else alert('Palavra chave incorreta');
    };

    return typeof checkin !== '0' && dataEvento == moment().format('DD/MM/YYYY') ? (
        checkin ? (

<>
     </>
    ) : (
        <><form onSubmit={handleSubmitCheckin(realizarCheckin)}>
        <div className="container col-md-12 custom-file">
            <input
                className="mb-0 pt-2 pb-2 pl-2 pr-2 borda rounded col-md-12 bg-light"
                type="text"
                name="palavraChave"
                {...register('palavraChave')}
                placeholder="Palavra Chave"
            />
        </div>
        <div className="text-center mt-3">
            <LinkBtn
                nomeBtn="Realizar Checkin"
                tipoBtn={props.tipoBtn}
                formBtn={props.formBtn}
            />
        </div>
    </form></>
    )
    ) : (
        <>
        </>
    );

}