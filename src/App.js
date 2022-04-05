import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Messages from './components/Messages/Messages';
import GetLogin from './components/GetLogin/GetLogin';

function App() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function changeId(event) {
    setId(event.target.value);
}

function changePassword(event) {
    setPassword(event.target.value);
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
      <Messages id={id} password={password} />
    </div>
  );
}

export default App;
