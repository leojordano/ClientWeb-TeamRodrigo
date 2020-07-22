import React, { useState } from 'react';
import axios from 'axios'

import logo from './logo.svg'

import './style.css'

import {config} from '../../config'
import { setUserLoged } from '../../redux/actions'
import { connect } from 'react-redux';

import FormLogin from './formLogin'

// import { Container } from './styles';

function LoginPage({ setUserLoged }) {
    const [name, setName] = useState('leo')
    const [email, setEmail] = useState('leo@mail.com')
    const [pass, setPass] = useState('123456')

    async function makeLogin() {
        await axios.post(`${config.baseUrl}auth/login`, {name, email, pass})
        .then(res => {
            
            const UserSeter = {token: res.data.token, user: res.data.findUsers[0]}
            return setUserLoged(UserSeter)
        })
    }

  return (
    <div className='body'>
        <div className="area">
                <h2>Team Rodrigo Plataform</h2>
                <h3>Member Area</h3>
                <FormLogin name={name} setName={setName} email={email} setEmail={setEmail} pass={pass} setPass={setPass} makeLogin={makeLogin} />
        </div>
    </div>
  );
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = { setUserLoged }

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)