import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Main from "./Main";
import Login from "./pages/Login";
import { handleInitialData } from "./actions/shared";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    if(this.props.authedUser)
    {
      return (
      
        <div>
          
          <Main/>
        </div>
      );
    }
    else{
      return (
      
        <div>
          
          <Login/>
        </div>
      );
    }
    
  }
}
function mapStateToProps({ authedUser, loadingBar }) {
  return {
    authedUser,
    loadingBar,
  };
}

export default connect(mapStateToProps)(App);
