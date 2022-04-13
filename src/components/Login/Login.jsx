import { useEffect, useState, useRef } from 'react';

function Login({ results }) {

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const host = "https://web-develop-react-express-chat.herokuapp.com"
    
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
        newUser(host, data);
    }
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