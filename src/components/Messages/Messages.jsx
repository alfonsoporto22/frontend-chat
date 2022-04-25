import { useEffect, useState, useRef } from 'react';
import '../../views/style/viewMessages.css'
import { REFRESH_TIME } from '../../defines';
import {HOST,authToken,authGet} from "../../aux_api";

function Messages({ id, password }) {

    const [messages, setMessages] = useState("");
    const token = authToken(id, password);
    const [timer, setTimer] = useState(null);


    /*
    useEffect
    */
    useEffect(
        () => {
            /**useInterval:primer parametro será una función que queramos que se ejecute 
             * en el tiempo que queramos. En este caso cada segundo llama a la 
             * función getMessages para mostrar mensajes
             */
            if (timer) clearInterval(timer);
            const timerId = setInterval(() => getMessages(token), REFRESH_TIME)
            setTimer(timerId)
        },
        [id, password]
    )

    let contador=0
    function getMessages(token) {
        authGet(HOST + "/messages/", token).then(
            data => setMessages(data.map(
                (item) =>
                    <div key={contador++} className={item.source === parseInt(id) ? "myMessage" : "otherMessage"}>
                        <li ><b>Id:</b> {item.source} <b>=</b> {item.content}</li>
                    </div>
            ))
        )
    }

    return (
        <>
            <h2>Token</h2>
            <p>{token}</p>
            <div>{messages}</div>
        </>
    );

}

export default Messages;