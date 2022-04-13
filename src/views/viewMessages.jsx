import Messages from "../components/Messages/Messages";
import SendMessages from "../components/SendMessage/SendMessages";
import './viewMessages.css';

function viewMessages(datosPadre, loggedIn) {
    return (
        <>
            <div className="mensajes">
                {loggedIn && <Messages id={datosPadre.id} password={datosPadre.password} />}
                {loggedIn && <SendMessages id={datosPadre.id} password={datosPadre.password} />}
            </div>
        </>
    )

}

export default viewMessages


