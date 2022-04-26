import { useState } from 'react';
import './App.css';
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
      <header>
        <h1>Aplicación de mensajería</h1>
        <div className="botones">
          <button onClick={() => { setCurrentView(viewListUsers) }}>Mostrar Usuarios</button>
          <button onClick={() => { setCurrentView(viewLogin) }}>Login</button>
          <button onClick={() => { setCurrentView(viewRegister(setDatosPadre, loginHandler)) }}>Registro</button>
          <button onClick={() => { setCurrentView(viewMessages(datosPadre, loggedIn)) }}>Mensajes</button>
        </div>
      </header>
      <div className='vistas'>
        {currentView}
      </div>
    </div>
  );
}

export default App;
