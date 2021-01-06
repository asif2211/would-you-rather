import React from "react";

import { Nav, Bars, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavElements";
import { connect } from "react-redux";
import {logoutUsers} from './actions/authedUser';
const Navbar = (props) => {
const handleLogout = ()=>{
  const {dispatch} = props;
  dispatch(logoutUsers())
}
  return (
    <Nav>
      <NavLink to="/">
        <h2>Would You Rather</h2>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add">New Poll</NavLink>
        <NavLink to="/leading">Leader Board</NavLink>
        <NavLink to="/Projects" />

        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
      </NavMenu>

      <NavLink to="/">
        <img
          src={props.userinfo.avatarURL}
          style={{ width: "2rem", height: "2rem", borderRadius: "50%" }}
        alt="avatar"/>
        <p style={{ margin: "1rem" }}>{props.userinfo.name}</p>
      </NavLink>
      <NavBtn>
        <NavBtnLink onClick={handleLogout}>Logout</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

const mapStateToProps = ({authedUser , users}) =>{
  const userinfo = users[authedUser]
  
 return {
  userinfo
   
 }
}

export default connect(mapStateToProps)(Navbar);
