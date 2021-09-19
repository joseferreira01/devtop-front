import React from 'react'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
//import axios from 'axios'
import { history } from '../../history'
import {Register} from './styles'
import './Login.css'
//import Axios from 'axios'
import api from '../../services/api'


const Login = () => {
    function  setRegister(){
        history.push('/register')
    }
    
    const handleSubmit = values => {
        console.log('data login',values)
        api.post('/user/authenticate', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('app-token', data)
                    history.push('/')
                } else{
                    console.log('erro logim')
                
                    
                }
            })
    }
  
    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })
    return (
        
        <>
        
            
            
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Login-Group">
                        <Field
                            name="email"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="email"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="password"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Login</button>
                    
                </Form>
               
            </Formik>
            
        </>
        
    )
}

export default Login
