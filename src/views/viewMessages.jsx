import Messages from "../components/Messages/Messages"
import SendMessages from "../components/SendMessage/SendMessages"

function viewMessages(datosPadre, loggedIn) {
    return (
        <>
            {loggedIn && <Messages id={datosPadre.id} password={datosPadre.password} />}
            {loggedIn && <SendMessages id={datosPadre.id} password={datosPadre.password} />}
        </>
    )

}

export default viewMessages


