import React, { Component } from "react";
import { authenticatedUserFun } from "../actions/authedUsers";
import { connect } from "react-redux";
class Login extends Component {
  constructor(){
    super();
    this.state = {
      error : ''
    }
  }
 
  render() {
    

    return (
      <div className="login">
        <div className="create-contact-details">
          <div>
            <h2>Login</h2>
            <div>
              <form onSubmit={this.handleLogin}>
              
                <select>
                  <option>Select User</option>
                 
                      <option >
                        User1
                      </option>
                      <option >
                        User1
                      </option>
                      <option >
                        User1
                      </option>
                  
                </select>
                <div>
                  <button type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default (Login);
