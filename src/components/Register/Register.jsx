import { useEffect, useState, useRef } from 'react';

function Register({ parentSetter }) {

    const [ id, setId ] = useState("");
    const [ password, setPassword ] = useState("");

    function changeIdHandler(ev) {
        setId(ev.target.value)
    }

    function changePasswordHandler(ev) {
        setPassword(ev.target.value);
    }

    useEffect(
        ()=>{
            parentSetter({
                id: id,
                password: password
            })
        },
        [id,password]
    )
    
    return (
        <>
            <h2>Registro</h2>
            <input
                placeholder="id"
                value={id}
                onChange={changeIdHandler}
            />
            <input
                placeholder="contraseña"
                type="password" value={password}
                onChange={changePasswordHandler}
            />
        </>
    );

}

export default Register;