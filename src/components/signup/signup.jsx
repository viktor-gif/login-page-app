import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { setLoginData } from "../../redux/signup-reducer";

const Signup = ({ loginData, setLoginData }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const onEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };
  const onFormSubmit = () => {
    setLoginData({ login: emailValue, password: passwordValue });
  };

  console.log(loginData);
  return (
    <section>
      <NavLink to="/login">
        <button>Log in</button>
      </NavLink>
      <form onSubmit={onFormSubmit}>
        <div>
          <input
            type="email"
            placeholder="Type your e-mail"
            value={emailValue}
            onChange={onEmailChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Type your password"
            value={passwordValue}
            onChange={onPasswordChange}
          />
        </div>
        <div>
          <button>Sign up</button>
        </div>
      </form>
    </section>
  );
};

export default Signup;
