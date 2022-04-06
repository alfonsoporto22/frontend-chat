import { useEffect, useState, useRef } from 'react';

function GetLogin() {

    let [usuarios, setUsuarios] = useState("");
    let [usuarios2, setUsuarios2] = useState("");
    const host = "https://web-develop-react-express-chat.herokuapp.com"

    //Funciones para coger usuarios GET
    async function get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }


    async function dataToHTMLList() {
        const users = await get(host + "/users/");
        setUsuarios(users.map(
            (item) => <li ><b>Id:</b> {item.id}- <b>Nombre:</b> {item.name}</li>
            
        ));

    }

    return (
        <>
            <h2>Obtener todas las cuentas de usuario</h2>
            <button onClick={dataToHTMLList}>Listar usuarios</button>
            <ul>{usuarios}</ul>
        </>
    );

}

export default GetLogin;