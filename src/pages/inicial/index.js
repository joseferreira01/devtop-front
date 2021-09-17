import React from 'react'
import{} from './styles'
import { history } from '../../history'
import { Register } from '../login/styles'
import Login from '../login/Login'

const Inicio = () => {
  function  setRegister(){
    history.push('/register')
}
function  setLogin(){
  history.push('/login')
}
   return <>
   
    <Register onClick={() => { setRegister() }}>Register</Register>
    <Login onClick={() => { setLogin() }}>ENtrar</Login>
    
    
    </>
}

export default Inicio
