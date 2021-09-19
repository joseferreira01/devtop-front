import React from 'react'
import { history } from '../../history'
import { Register } from './styles'
import Login from '../login/Login'

const Inicio = () => {
  function  setRegister(){
    history.push('/register')
}
function  setLogin(){
  history.push('/login')
}
   return <>
   
    <Register className='button' onClick={() => { setRegister() }}>Cadastrar</Register>
    <Login onClick={() => { setLogin() }}>Entrar</Login>
    
    
    </>
}

export default Inicio
