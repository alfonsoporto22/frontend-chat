import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Messages from './components/Messages/Messages';
import GetLogin from './components/GetLogin/GetLogin';

function App() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <GetLogin/>
      <Login />
      <Messages />
    </div>
  );
}

export default App;
