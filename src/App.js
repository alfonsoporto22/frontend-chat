import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Messages from './components/Messages/Messages';
import GetLogin from './components/GetLogin/GetLogin';
import SendMessages from './components/SendMessage/SendMessages';
import Register from './components/Register/Register';
import viewListUsers from './views/viewListUsers';
import viewLogin from './views/viewLogin';
import viewMessages from './views/viewMessages';
import viewRegister from './views/viewRegister';

function App() {
  const [loggedIn, setloggedIn] = useState(false);
  const [datosPadre, setDatosPadre] = useState("");
  const [currentView, setCurrentView] = useState(undefined)

  function loginHandler() {
    setloggedIn(true);
  }


  return (
    <div>
      <h1>Aplicación de mensajeria</h1>
      <h2>Panel para mostrar</h2>
      <button onClick={() => { setCurrentView(viewListUsers) }}>Mostrar Usuarios</button>
      <button onClick={() => { setCurrentView(viewLogin) }}>Mostrar Login</button>
      <button onClick={() => { setCurrentView(viewRegister(setDatosPadre, loginHandler)) }}>Mostrar Registro</button>
      <button onClick={() => { setCurrentView(viewMessages(datosPadre,loggedIn )) }}>Mostrar Mensajes</button>
      {currentView}
    </div>
  );
}

export default App;
