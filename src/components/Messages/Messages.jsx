import { useEffect, useState, useRef } from 'react';

function Messages({ id, password }) {

    //const [token, setToken] = useState("");
    const [messages, setMessages] = useState("");
    const token = authToken(id, password);
    const [timer, setTimer] = useState(null);
    const host = "https://web-develop-react-express-chat.herokuapp.com"

    function authToken(id, password) {

        // En autenticación Basic, usuario y contraseña se separan con ':'
        const authToken = `${id}:${password}`;
        // Y se codifican en Base64
        const base64token = btoa(authToken);
        return `Basic ${base64token}`;
    }

    /*
    useEffect que solo se ejecutará una vez porque metemos un array vacio
    */
    useEffect(
        () => {
            /**useInterval:primer parametro será una función que queramos que se ejecute 
             * en el tiempo que queramos
             */
            if ( timer ) clearInterval(timer);
            const timerId = setInterval(()=>getMessages(token), 1000)
            setTimer(timerId)
        },
        [id, password]
    )

    async function authGet(url, token) {
        const response = await fetch(
            url,
            {
                headers: {
                    Authorization: token
                }
            }
        );
        const data = await response.json();
        return data;
    }
    function getMessages(token) {
        authGet(host + "/messages/", token).then(
            data => setMessages(data.map(
                (item) => <li ><b>Id:</b> {item.source}- <b>Contenido:</b> {item.content}</li>
                
            ))
        )
    }

    return (
        <>
            <h2>Obtener todos los mensajes</h2>
            <p>{token}</p>
            <button onClick={getMessages}>Obtener Mensajes</button>
            <p>{messages}</p>
        </>
    );

}

export default Messages;