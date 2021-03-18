import React, { useEffect } from "react";
import { setLoginData } from "../../redux/signup-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Signup from "./signup";

class SignupContainer extends React.Component {
  // componentDidMount() {
  //   this.props.setLoginData({ login: "lssfjf", password: 359349639 });
  // }
  // componentDidUpdate(prevProps) {
  //   debugger;
  //   if (prevProps.loginData !== this.props.loginData) {
  //     this.props.setLoginData({ login: "lssfjf", password: 359349639 });
  //   }
  // }
  render() {
    return (
      <Signup
        loginData={this.props.loginData}
        setLoginData={this.props.setLoginData}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    loginData: state.signupPage.loginData,
  };
};

export default compose(connect(mapStateToProps, { setLoginData }))(
  SignupContainer
);
