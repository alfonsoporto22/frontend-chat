import GetLogin from "../components/GetLogin/GetLogin"
import Login from "../components/Login/Login"
import Register from "../components/Register/Register"
import './style/viewRegister.css';

function viewRegister(setDatosPadre, loginHandler) {
    return (
        <>
            <div className="register">
                <Register parentSetter={setDatosPadre} />
                <button onClick={loginHandler}>Register</button>
            </div>
        </>
    )

}

export default viewRegister