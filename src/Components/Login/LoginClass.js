import React from "react";
import Login from "./Login";

export default class LoginClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleEmail = (value) => {
    this.setState({ username: value });
  };

  handlePassword = (value) => {
    this.setState({ password: value });
  };

  handleSubmit = () => {};

  render() {
    return (
      <div className="Login-Component-wrap">
        <Login
   
        ></Login>
      </div>
    );
  }
}
