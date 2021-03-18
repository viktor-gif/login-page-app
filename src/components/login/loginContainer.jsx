import React, { useEffect } from "react";
import { setUserLogin, setIsLoggedIn } from "../../redux/signup-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Login from "./login";

class LoginContainer extends React.Component {
  render() {
    return (
      <Login
        loginData={this.props.loginData}
        userLogin={this.props.userLogin}
        setUserLogin={this.props.setUserLogin}
        setIsLoggedIn={this.props.setIsLoggedIn}
        isLoggedIn={this.props.isLoggedIn}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    loginData: state.signupPage.loginData,
    userLogin: state.signupPage.userLogin,
    isLoggedIn: state.signupPage.isLoggedIn,
  };
};

export default compose(
  connect(mapStateToProps, { setUserLogin, setIsLoggedIn })
)(LoginContainer);
