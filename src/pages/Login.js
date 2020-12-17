import React, { Component } from "react";
import { getAuthdUsers } from "../actions/authedUsers";
import { connect } from "react-redux";
class Login extends Component {
  constructor(){
    super();
    this.state = {
      error : ''
    }
  }
 handleUserLogin = (e)=>{
  const userId = this.userId.value;
  const { dispatch } = this.props;
   
  e.preventDefault();
  if(userId)
  { 
    dispatch(getAuthdUsers(userId))
  }
  else {
    
    this.setState({
      error : 'Please Select value to get access'
    }) 
  }
}
  render() {
    return (
      <div className="login">
        <div className="create-contact-details">
          <div>
            <h2>Login</h2>
            <div>
              <form onSubmit={this.handleUserLogin}>
              <div style={{marginBottom:'.5rem',color:'red'}}>
                {this.state.error}
              </div>
                <select ref= {(id)=> (this.userId = id)}>
                  <option value="">Select User</option>
                  {this.props.usersinfo.map((data) => (
											<option value={data.userid} key={data.userid}>
												{data.username}
											</option>
										))}
                      
                  
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
// return user info when store is updated then it return a plain object 
const mapStateToProps = ({users})=>{
  return {
    usersinfo : Object.keys(users).map(id=>({
      userid : id,
      username : users[id].name
    }))
  }
}

export default connect(mapStateToProps)(Login);
