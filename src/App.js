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
        <h1>Aplicación de mensajeria</h1>
        <div className="botones">
          <button onClick={() => { setCurrentView(viewListUsers) }}>Mostrar Usuarios</button>
          <button onClick={() => { setCurrentView(viewLogin) }}>Mostrar Login</button>
          <button onClick={() => { setCurrentView(viewRegister(setDatosPadre, loginHandler)) }}>Mostrar Registro</button>
          <button onClick={() => { setCurrentView(viewMessages(datosPadre, loggedIn)) }}>Mostrar Mensajes</button>
        </div>
      </header>
      <div className='vistas'>
        {currentView}
      </div>
    </div>
  );
}

export default App;
