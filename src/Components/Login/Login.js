import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';


import sha1 from 'crypto-js/sha1'

import logo from '../../assets/img/logo-2.png'
import imageLogin from '../../assets/img/mcc.jpeg'

import urls from '../../assets/urls.json';
const Login = () => {


  // Leo los parametros que recibe login y que van a ser devueltos como variables
  //globales de administracion isAdmin and userName (funciones de estado que vienen de APP)



  // declaracion de variables de usuario.

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [notLogged, setNotLogged] = useState('')

  // Autorizar usuario

  const authUser = async () => {

    const thisBody = {
      email, password
    }

    const url = `${urls.expressServer}/auth`

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(thisBody),
      headers: { 'Content-Type': 'application/json' },

    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "error") throw new Error(data.msg)
        else {
          setIsAuthenticated(data.auth)
          // max-age=${900}; 
          document.cookie = `token=${data.token};max-age=${1800}; path=/; samesite=strict`
          document.cookie = `userName=${data.userName}; max-age=${1800}; path=/; samesite=strict`
          document.cookie = `admin=${sha1(data.admin.toString()).toString()}; max-age=${1800}; path=/; samesite=strict`

        }

      })
      .catch(err => {
        console.log(err)

        setNotLogged(err.message)
      })


  }

  return (

    <>{!isAuthenticated ?

      <div className='d-flex justify-content-center'>
        <div className='col-6 p-1'>
          <img className='img-fluid' alt='img' src={imageLogin} style={{ height: '100vh' }}></img>
        </div>
        <div className='col-6 p-5'>
          <img className='img-fluid m-0' alt='logo' src={logo} style={{ width: '300px' }}></img>
          <h1 className='m-3'>Log in to EMEDE ELECTRIC </h1>
          <div className='m-3 mt-5 p-0 w-75'>
            <label className='form-label' htmlFor='user'>Email</label>
            <input className='form-control' type='email' placeholder='' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
            <label className='form-label mt-5' htmlFor='user'>Password</label>
            <input className='form-control' type='password' placeholder='' value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
            {notLogged ? <p>{notLogged}</p> : null}
            <button className='btn btn-submit mt-5' onClick={() => authUser()}>Login</button>
          </div>
        </div>
      </div> : <Navigate to={'/dashboard'} />}
    </>

  )
}

export default Login