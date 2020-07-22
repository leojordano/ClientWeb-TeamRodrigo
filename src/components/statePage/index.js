import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


// import { Container } from './styles';

function StatePage({ user }) {
    const [userData, setUserData] = useState()
    const [token, setToken] = useState()

    useEffect(() => {
        if(user) {
            user.map(item => {
              setUserData(item.user)
              return setToken(item.token)
            })
        }
    }, [user])

  return (
      <div className='center'>
        <h2>State Page</h2>

        {userData ? <span>Logado com {userData.name}</span> : <span>Faça Login</span>}
      </div>
  );
}

function mapStateToProps(state) {
    return {
      user: state
    }
}

const mapDispatchToProps = { }

export default  connect(mapStateToProps, mapDispatchToProps)(StatePage);