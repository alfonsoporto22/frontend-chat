import GetLogin from "../components/GetLogin/GetLogin"
import Login from "../components/Login/Login"
import Register from "../components/Register/Register"

function viewRegister (setDatosPadre,loginHandler) {
    return(
        <>
        <Register parentSetter={setDatosPadre}/>
        
        <button onClick={loginHandler}>Register</button>
        </>
    )
        
}

export default viewRegister