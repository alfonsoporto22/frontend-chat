import { useEffect, useState, useRef } from 'react';
import './GetLogin.css';
function GetLogin() {

    let [usuarios, setUsuarios] = useState("");
    let [visibilidad, setVisibilidad] = useState(true);
    const host = "https://web-develop-react-express-chat.herokuapp.com"

    //Funciones para coger usuarios GET
    async function get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }


    async function dataToHTMLList() {
        if (visibilidad) {
            const users = await get(host + "/users/");
            setUsuarios(users.map(
                (item) => <li ><b>Id:</b> {item.id} - <b>Nombre:</b> {item.name}</li>

            ));
            setVisibilidad(false);
        } else {
            setUsuarios("")
            setVisibilidad(true);
        }

    }

    return (
        <div className='login'>
            <h2>Obtener todas las cuentas de usuario</h2>
            <button onClick={dataToHTMLList}>Listar usuarios</button>
            <ul>{usuarios}</ul>
        </div>
    );

}

export default GetLogin;