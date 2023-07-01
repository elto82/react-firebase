import { useState } from "react";
import "../styles/main.css";
import { loginWithEmailAndPassword } from "../funtions/loginWithEmailPassword";
import { registerUser } from "../funtions/registerUsers.js";
import { loginWithGoogle } from "../funtions/loginWithGoogle";
const Login = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log(username, password);

    if (isLoggingIn) {
      await loginWithEmailAndPassword(username, password);
    } else {
      await registerUser(username, password);
    }
  };

  return (
    <div className="container">
      <h1>{isLoggingIn ? "Inicia sesión" : "Registrate"}</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="username">
          Username
        </label>
        <input
          className="input"
          type="text"
          id="username"
          autoComplete="current-username"
        />
        <label className="label" htmlFor="password" type="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <button className="button-form">
          {isLoggingIn ? "Iniciar sesión" : "Registrarse"}
        </button>
      </form>
      <button className="button-google" onClick={loginWithGoogle}>
        Accede con Google
      </button>
      <button
        className="button-register"
        onClick={() => setIsLoggingIn(!isLoggingIn)}
      >
        {isLoggingIn ? "Registrate" : "Inicia sesión"}
      </button>
    </div>
  );
};

export default Login;
