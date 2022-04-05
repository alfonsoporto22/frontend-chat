import { useEffect, useState, useRef } from 'react';

function SendMessages({ id, password }) {

    const [message, setMessage] = useState("");
    const host = "https://web-develop-react-express-chat.herokuapp.com"

    async function authPost(url, token, data) {
        const response = await fetch(
            url,
            {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token
                }
            }
        );
        const responseData = await response.json();
        return responseData;
    }

    function authToken(id, password) {

        // En autenticación Basic, usuario y contraseña se separan con ':'
        const authToken = `${id}:${password}`;
        // Y se codifican en Base64
        const base64token = btoa(authToken);
        return `Basic ${base64token}`;
    }

    function send(ev) {
        const token = authToken(id, password);
        let data = JSON.stringify({ content: message });
        authPost(host + "/message/", token, data);

    }

    function changeMessage(event) {
        setMessage(event.target.value);
    }


    return (
        <>
            <h2>Enviar mensaje</h2>
            <textarea type="text" value={message} onChange={changeMessage} /><br />
            <button onClick={send}>Enviar</button>
        </>
    );

}

export default SendMessages;
