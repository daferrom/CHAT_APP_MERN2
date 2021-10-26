import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";

export default function Register() {
  const username = useRef();
  const name = useRef();
  const userType = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        name : name.current.value,
        userType : userType.current.value
      };
      try {
        await axios.post('auth/register', user);
        history.push('/login');
        console.log(user)
        } catch (err) {    
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">INTOPCOL</h3>
          <span className="loginDesc">
          Conectate con tu equipo de trabajo
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
          <input
              placeholder="Usuario"
              required
              ref={username}
              
              className="loginInput"
            /> 
            <input
            placeholder="Nombre"
            required
            ref={name}
            
            className="loginInput"
          />
          <input
            placeholder="Cargo"
            required
            ref={userType}
            
            className="loginInput"
          />
          <input
              placeholder="Email"
              required
              ref={email}
              
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Contraseña"
              required
              ref={password}
              
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Confirma tu contraseña"
              required
              ref={passwordAgain}
              
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">Iniciar sesión</button>
            <button className="loginRegisterButton">Iniciar sesión en la cuenta</button>
          </form>
        </div>
      </div>
    </div>
  );
}