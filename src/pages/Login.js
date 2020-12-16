import React, { Component } from "react";
import { setAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";
class Login extends Component {
  state = {
    errorMsg: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userID = this.userID.value;
    const { dispatch } = this.props;
    alert(userID);
    
    if (userID) {
      
      dispatch(setAuthedUser(userID));
    } else {
      alert('must chose user name')
    }
  };
  render() {
    const { userNames } = this.props;
    const { errorMsg } = this.state;

    return (
      <div className="login">
        <div className="create-contact-details">
          <div>
            <h2>Login</h2>
            <div>
              <form onSubmit={this.handleSubmit}>
              {errorMsg ? <p className="danger">{errorMsg}</p> : null}
                <select ref={(id) => (this.userID = id)}>
                  <option value={0}>Select User</option>
                  {userNames.map((item) => {
                    return (
                      <option value={item.value} key={item.value}>
                        {item.label}
                      </option>
                    );
                  })}
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
function mapStateToProps({ users }) {
  return {
    userNames: Object.keys(users).map((id) => ({
      value: id,
      label: users[id].name,
    })),
  };
}

export default connect(mapStateToProps)(Login);
