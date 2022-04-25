import {  useState } from 'react';
import {HOST,authPost,authToken} from "../../aux_api";

function SendMessages({ id, password }) {

    const [message, setMessage] = useState("");
    const host = "https://web-develop-react-express-chat.herokuapp.com"


    function send(ev) {
        const token = authToken(id, password);
        let data = JSON.stringify({ content: message });
        authPost(HOST + "/message/", token, data);

    }

    function changeMessage(event) {
        setMessage(event.target.value);
    }


    return (
        <>
            <textarea type="text" value={message} onChange={changeMessage} />
            <button onClick={send}>Enviar</button>
        </>
    );

}

export default SendMessages;
