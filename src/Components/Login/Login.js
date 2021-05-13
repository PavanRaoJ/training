import React from "react";
import "./Login.css";
import Home from '../Home/Home';
import Snackbar from '../Snackbar/Snackbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {handleLogin} from '../../actions/Actions'
import axios from 'axios';
import history from '../../history';
const Login = (props) => {
  const [LoginDetails, setLoginDetails] = React.useState({
    username: "",
    password: "",
    email: "",
  });
  const [SnackbarVisible,setSnackbarVisible]=React.useState(false);
  const [ErrorMessage,setErrorMessage]=React.useState(false);
  const [HomeActive,setHomeActive]=React.useState(false)
  
  

  const handleEmailChange = (e) => {
    e.preventDefault();
    let newState = Object.assign({}, LoginDetails);
    newState.email = e.target.value;
    setLoginDetails(newState);
  };

  const handlePasswordChange = (e) => {

    let newState = Object.assign({}, LoginDetails);
    newState.password = e.target.value;
    setLoginDetails(newState);
  };

  const handleUserNameChange = (e) => {

    let newState = Object.assign({}, LoginDetails);
    newState.username = e.target.value;
    setLoginDetails(newState);
  };


  const validateEmail=()=>
  {
    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Converting the email to lowercase
    return regexp.test(String(LoginDetails.email).toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let validEmail=validateEmail();
    if(!validEmail)
    {
      setSnackbarVisible(true);
      setErrorMessage("Please enter a Valid Email");
    }
    else if(LoginDetails.username===undefined || LoginDetails.username.length===0)
    {
      setSnackbarVisible(true);
      setErrorMessage("Please enter the Username")
    }
    else if(LoginDetails.password===undefined || LoginDetails.password.length===0)
    {
      setSnackbarVisible(true);
      setErrorMessage("Please enter the Password")
    }
   else
   {
      AsynchandleLogin();
   }
  };

  const AsynchandleLogin=()=>
  {
    const reqpayload = {
      email: LoginDetails.email,
      password: LoginDetails.password,
    };

    axios
    .post(
      `${process.env.REACT_APP_API}/auth/login`,
      reqpayload
    )
    .then((res) => {
      if (res.status === 200) {

        let actionPayload={token:res.data.token}

        axios
          .get(
            `${process.env.REACT_APP_API}/users/${res.data.id}`
          )
          .then((res) => {
            if (res.status === 200) {
              actionPayload={...actionPayload,...res.data};
              //redux action being dispatched 
                props.handleLogin(actionPayload);
                history.push('/Home/');
                setHomeActive(true)
                
            }
        
          })
          .catch((error) => console.error(error));
      } 
    })
    .catch((error) => {
      console.error(error);
      setSnackbarVisible(true);
      setErrorMessage('Invalid Email or Password')
    });


  }

if(!HomeActive)
{
  return (
    <div>
   
      <div className="Login-form-wrap">
        <div className="Login-form">
          <form>
            <p>Sign in to your account</p>
            <div>
              <span>
                Email<span>* </span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </span>
              <input
                type="email"
                value={LoginDetails.email}
                className={"Email"}
                onChange={(e) => {
                  handleEmailChange(e);
                }}
                required
              ></input>
            </div>
            <br></br>
            <div>
              <span>
                Username<span>*</span> &nbsp;&nbsp;
              </span>
              <input
                value={LoginDetails.username}
                className={"Email"}
                onChange={(e) => {
                  handleUserNameChange(e);
                }}
                required
              ></input>
            </div>
            <br></br>
            <div>
              <span>
                Password <span>*</span> &nbsp;{" "}
              </span>
              <input
                className={"Email"}
                value={LoginDetails.password}
                type="password"
                onChange={(e) => {
                  handlePasswordChange(e);
                }}
                required
              ></input>
            </div>
             {/* <NavLink  to="/Home/"   className="Nav-items">
                  Submit
             </NavLink> */}
            <button onSubmit={(e)=>{e.preventDefault()}} onClick={(e)=>{handleSubmit(e)}} >Submit</button>
            <div className="ErrorMsg">{"Please fill out all the mandatory fields"}</div>
          </form>
        </div>
      </div>
      <div>
       {SnackbarVisible &&
          <Snackbar setSnackbarVisible={setSnackbarVisible} ErrorMessage={ErrorMessage}/>
       } 
      </div>
    </div>
  );
}
else
{
  return(
    <Home></Home>
  )
}
};

function mapStateToProps(state) {
  return {
    loginDetails_store:state.loginDetails_store
  }
}


function MapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleLogin:handleLogin
    }, dispatch
  )
}
export default connect(mapStateToProps, MapDispatchToProps)(Login);

