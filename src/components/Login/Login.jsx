import { useEffect, useState, useRef } from 'react';
import { HOST } from "../../aux_api";

function Login() {

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    async function newUser(url, data) {
        const responses = await fetch(
            url + "/login/",
            {
                method: 'POST',
                body: data,
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
    }

    function login() {
        let dataTaken = { userName: usuario, password: password };
        const data = JSON.stringify(dataTaken);
        newUser(HOST, data);
    }

    //Handlers
    function changeUsuario(event) {
        setUsuario(event.target.value);
    }
    function changePassword(event) {
        setPassword(event.target.value);
    }

    return (
        <>
            <h2>Login de usuario</h2>
            <input type="text" value={usuario} onChange={changeUsuario} />
            <input type="text" value={password} onChange={changePassword} />
            <button onClick={login}>Login</button>
        </>
    );

}

export default Login;