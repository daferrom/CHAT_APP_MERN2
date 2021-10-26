import { useContext, useRef } from "react";
import './login.css';
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
//import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email:email.current.value, password:password.current.value }, dispatch);
  };
  console.log(user)
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">INTOPCOL </h3>
          <span className="loginDesc">
          Conectate con tu equipo de trabajo
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Contraseña"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton">{isFetching ? "loading" : "Iniciar sesión" }</button>
            <span className="loginForgot">Olvidaste tu contraseña?</span>
            <button className="loginRegisterButton" type="submit">Crea tu cuenta </button>
              {/*{isFetching ? (
                <CircularProgress color='white' size="20px" />
              ) : (
                "Iniciar sesión"
              )}
            </button>
            <span className="loginForgot">Olvidaste tu contraseña?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Crea tu cuenta"
              )}
              </button>*/}
          </form>
        </div>
      </div>
    </div>
  );
}
