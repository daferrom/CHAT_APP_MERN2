//import axios from "axios";
import RequestService from '../../config/index'
import { useRef } from "react";
import "./register.css";
//import { useHistory } from "react-router";
import { useState } from "react";

export default function Register() {
  const username = useRef();
  const name = useRef();
  const userType = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

 // const history = useHistory();
  const [user, setUser] =  useState(
    { 
      'username':'',
      'name' :'',
      'userType':'',
      'email':'',
      'password':''
    }
  )
  const handleChange = (e)=>{
    setUser({
      ...user,
      [ e.target.name ]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    console.log(user)
    e.preventDefault();
    /*if ( e.target.passwordAgain !== e.target.password ) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else */
       const res = await RequestService.post('/auth/register', user)
       console.log(res)
       if (res.status === 201){
         console.log('User registered')
       }
       else if(res.status === 400) {
         console.error("Error 400")
       }
       console.log()
      
      /*const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,*/

      
      /*
      try {
        await axios.post("/auth/register", user);
       history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }*/
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Intopcol chat</h3>
          <span className="loginDesc">
            Conectate con tu equipo de trabajo
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Usuario"
              required
              name='username'
              onChange = {handleChange}
              className="loginInput"
            /> 
            <input
            placeholder="Nombre"
            required
            name='name'
            onChange = {handleChange}
            className="loginInput"
          />
          <input
            placeholder="Cargo"
            required
            name='userType'
            onChange = {handleChange}
            className="loginInput"
          />
          <input
              placeholder="Email"
              required
              name='email'
              onChange = {handleChange}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="contraseña"
              required
              name='password'
              onChange = {handleChange}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="confirma tu contraseña"
              required
              name='passwordAgain'
              onChange = {handleChange}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Registrarse
            </button>
            <button className="loginRegisterButton">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
}
