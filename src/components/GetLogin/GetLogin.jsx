import { useEffect, useState, useRef } from 'react';
import './GetLogin.css';
import { HOST, get } from "../../aux_api";
function GetLogin() {

    let [usuarios, setUsuarios] = useState("");
    let [visibilidad, setVisibilidad] = useState(true);
    let contador = 0;
    async function dataToHTMLList() {
        if (visibilidad) {
            const users = await get(HOST + "/users/");
            setUsuarios(users.map(
                (item, key) => <li key={contador++}><b>Id:</b> {item.id} - <b>Nombre:</b> {item.name}</li>

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
            <br />
            <button onClick={dataToHTMLList}>Listar usuarios</button>
            <br />
            <ul>{usuarios}</ul>
        </div>
    );

}

export default GetLogin;