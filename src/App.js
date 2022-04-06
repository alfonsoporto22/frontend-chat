import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Messages from './components/Messages/Messages';
import GetLogin from './components/GetLogin/GetLogin';
import SendMessages from './components/SendMessage/SendMessages';


function App() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [ loggedIn, setloggedIn ] = useState(false);

  function changeId(event) {
    setId(event.target.value);
}

function changePassword(event) {
    setPassword(event.target.value);
}

function loginHandler() {
  setloggedIn(true);
}


  return (
    <div>
      <h1>Aplicación de mensajeria</h1>
      <GetLogin />
      <Login />
     
      <h3>Id</h3>
      <input type="text" value={id} onChange={changeId} /><br />
      <h3>Password</h3>
      <input type="text" value={password} onChange={changePassword} /><br />
      <button onClick={loginHandler}>Register</button>
      {loggedIn && <Messages id={id} password={password} />}
      {loggedIn && <SendMessages id={id} password={password} />}
    </div>
  );
}

export default App;
