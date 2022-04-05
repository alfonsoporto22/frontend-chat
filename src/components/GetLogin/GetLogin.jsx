import { useEffect, useState, useRef } from 'react';

function GetLogin() {

    let [usuarios, setusuarios] = useState("");
    const host = "https://web-develop-react-express-chat.herokuapp.com"

    //Funciones para coger usuarios GET
    async function get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    async function getUsers() {
        const users = await get(host + "/users/");
        setusuarios(JSON.stringify(users));
    };

    function updateButtonClickHandler() {
        getUsers();
    }

    return (
        <>
            <p>{usuarios}</p>
            <button onClick={updateButtonClickHandler}>Get Users</button>
        </>
    );

}

export default GetLogin;