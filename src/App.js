import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Messages from './components/Messages/Messages';
import GetLogin from './components/GetLogin/GetLogin';
import SendMessages from './components/SendMessage/SendMessages';
import Register from './components/Register/Register';

function App() {
  const [ loggedIn, setloggedIn ] = useState(false);
  const [ datosPadre, setDatosPadre ] = useState("");


function loginHandler() {
  setloggedIn(true);
}


  return (
    <div>
      <h1>Aplicación de mensajeria</h1>
      <GetLogin />
      <Login />
      <Register parentSetter={setDatosPadre}/><br />
      <button onClick={loginHandler}>Register</button>
      {loggedIn && <Messages id={datosPadre.id} password={datosPadre.password} />}
      {loggedIn && <SendMessages id={datosPadre.id} password={datosPadre.password} />}
    </div>
  );
}

export default App;
