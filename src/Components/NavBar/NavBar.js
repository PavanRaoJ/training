import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const NavBar = (props) => {
  let loginDetails_store = props.loginDetails_store;
  return (
    <div className="header">
      <div className="Nav-items-wrap">
        {loginDetails_store.token === undefined ||
        loginDetails_store.token.length === 0 ? (
          <NavLink to="/Login/" className="Nav-items ">
            Login
          </NavLink>
        ) : (
          <NavLink to="/Settings/" className="Nav-items ">
            <img src={`${process.env.REACT_APP_API}/${ loginDetails_store.profilePic}`}></img>
            {loginDetails_store.firstName}
          </NavLink>
        )}

        <NavLink to="/Home" className="Nav-items ">
          Home
        </NavLink>

        <NavLink to="/Products/" className="Nav-items ">
          Products
        </NavLink>
        <NavLink to="/Users/" className="Nav-items ">
          Users
        </NavLink>

        <NavLink to="/Gallery" className="Nav-items ">
          Gallery
        </NavLink>
        <div className="Logo">
          <div className="wrapper">
            <div className="circ1"></div>
            <div className="circ2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    loginDetails_store: state.loginDetails_store,
  };
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, MapDispatchToProps)(NavBar);

// export default NavBar;
