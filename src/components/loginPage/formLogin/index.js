import React from 'react';
import {IoMdMail} from 'react-icons/io'
import {FaUserAlt, FaLock} from 'react-icons/fa'
// import { Container } from './styles';

function FormLogin({ name, setName, email, setEmail, pass, setPass, makeLogin }) {
  return (
      <div className='cont-input'>
        <div className="g-input">
            <label htmlFor="name"><FaUserAlt /></label>
            <input placeholder='Username' id='name' value={name} onChange={e => setName(e.target.value)} type="text"/>
        </div>

        <div className="g-input">
            <label htmlFor="email"><IoMdMail /></label>
            <input placeholder='Email' id='email'  value={email} onChange={e => setEmail(e.target.value)} type="text"/>
        </div>

        <div className="g-input">
            <label htmlFor="pass"><FaLock /></label>
            <input placeholder='Password' id='pass' value={pass} onChange={e => setPass(e.target.value)} type="password"/>
        </div>

        <button onClick={() => makeLogin()}>Entrar</button>
      </div>
  );
}

export default FormLogin;