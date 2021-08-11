import React, { useEffect, useState } from 'react'
import {reduxForm} from 'redux-form'
import {Field} from 'redux-form'
import { LoginInputArea, PasswordInputArea } from './Forms'
import { requiredFields, maxLengthThunkCreator, minLengthThunkCreator } from './Validators'
import { setLoginDataThunkCreator } from '../../redux/LoginReducer';
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import LoginPokemon from './LoginPokemon'
import './Login.css'




let minLength = minLengthThunkCreator(3);
let maxLength = maxLengthThunkCreator(16);



const LoginForm = (props) => {

    return (
        <div className='login_form'>
            <form onSubmit = {props.handleSubmit} className='current_form'> 
                <div>
                   <Field className='input_field' placeholder='Login' name='login' component={LoginInputArea} validate = {[requiredFields,maxLength,minLength]}/>
                </div>
                <div>
                    <Field className='input_field' placeholder='Password' name='password' component={PasswordInputArea} validate = {[requiredFields,maxLength,minLength]} />
                </div>
                <div>
                    <Field type='checkbox' name='rememberMe' component='input' />Remember me?
                </div>               
                <button className='login_button'>Login</button>
            </form>
            <div className='login_item'>
            <LoginPokemon />
            </div>
   
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.setLoginDataThunkCreator(formData.login, formData.password, formData.rememberMe)
        console.log(formData)
        
    }
  

    return (
        <div>
            <h1 className='login_header'>Login</h1>
            <LoginReduxForm onSubmit = {onSubmit}/>
           
        </div>
    )
};



let mapStateToProps = (state) => {
    return {
        login: state.LoginReducer.login
    }
}



export default connect(mapStateToProps, {setLoginDataThunkCreator:setLoginDataThunkCreator})(Login)
