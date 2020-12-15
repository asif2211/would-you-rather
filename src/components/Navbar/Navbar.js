import React from "react";
import { reSetAuthedUser } from "../../actions/authedUser";
import { Nav, Bars, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavElements";

import { connect } from "react-redux";
const Navbar = (props) => {
  const { user, dispatch } = props;

  const handleLogout = () => {
    dispatch(reSetAuthedUser());
  };

  return (
    <Nav>
      <NavLink to="/">
        <h2>Would You Rather</h2>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">New Poll</NavLink>
        <NavLink to="/About">Leader Board</NavLink>
        <NavLink to="/Projects" />

        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
      </NavMenu>

      <NavLink to="/Projects">
        <img
          src={user.avatarURL}
          style={{ width: "2rem", height: "2rem", borderRadius: "50%" }}
        alt="avatar"/>
        <p style={{ margin: "1rem" }}>{user.name}</p>
      </NavLink>
      <NavBtn>
        <NavBtnLink onClick={handleLogout}>Logout</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

function mapStateToProps({ users, authedUser }) {
  return {
    user: users[authedUser],
  };
}

export default connect(mapStateToProps)(Navbar);
