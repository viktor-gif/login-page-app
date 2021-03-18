import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import { setLoginData } from "../../redux/signup-reducer";

const Login = ({
  loginData,
  userLogin,
  setUserLogin,
  setIsLoggedIn,
  isLoggedIn,
}) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const onEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const onFormSubmit = () => {
    setUserLogin({ login: emailValue, password: passwordValue });
  };

  let logins = [];
  loginData.map((l) => logins.push(l.login));
  console.log(logins);

  let passwords = [];
  loginData.map((l) => passwords.push(l.password));
  console.log(passwords);

  const login = userLogin.login;
  const password = userLogin.password;

  console.log(login);
  console.log(password);

  if (logins.includes(login) && passwords.includes(password)) {
    setIsLoggedIn(true);
    return <Redirect to="/website" />;
  } else {
    console.log("no-no-no");
  }
  console.log(isLoggedIn);
  // const toSignup = () => {
  //   return (
  //     <div>
  //       <Redirect to="/website" />
  //     </div>
  //   );
  // };

  return (
    <section>
      <NavLink to="/signup">
        <button>Sign up</button>
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
          <button>Log in</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
