import React, { Component } from "react";
import Login from './pages/Login';
import {handleInitialData} from './actions/shared';
import {connect} from 'react-redux'
class App extends Component {
  //connect redux to react app
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    
      return (
        <div>
          {!this.props.authedUsers ?(<Login/>): (<div>welcome home</div>)}
          
        </div>
      )
    
}
}
 const mapStateToProps = ({authedUsers}) => {
  return {
    authedUsers
  }
 }
export default connect(mapStateToProps)(App);
