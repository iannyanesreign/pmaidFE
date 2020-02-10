import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import {signIn} from './services/auth'

function App() {

    console.log('ENV: ', process.env.REACT_APP_MODE)
    console.log( process.env.REACT_APP_API_KEY)

    const [isAuth, setIsAuth] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    async function onLogin(){
        try {
            const { data } = await signIn(username, password)
            setIsAuth(true)
        }
        catch (e) {
            setIsAuth(false)

        }
    }

    if(isAuth) return <h1>Hola</h1>


  return (
    <div className="App">
        <h1>Inicia Sesión, Modo: {process.env.REACT_APP_MODE}!</h1>
        <input type="text" name={"username"} placeholder={'Usuario'}
               onChange={(e) => setUsername(e.target.value)}/>
        <input type="text" name={"password"} placeholder={'Contraseña'}
               onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={() => onLogin()}>Inicia sesión</button>
    </div>
  );
}

export default App;
