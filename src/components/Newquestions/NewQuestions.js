import React, { Component } from "react";
import { handleAddQuestion } from '../../actions/questions';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
class NewQuestions extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false,
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;

    e.preventDefault();

    this.setState(
      {
        optionOne: "",
        optionTwo: "",
        toHome: true,
      },
      () => dispatch(handleAddQuestion(optionOne, optionTwo))
    );
  };

  render() {
    const { optionOne, optionTwo, toHome } = this.state;

    if (toHome === true) return <Redirect to="/" />;

    return (
      <div className="poll">
        <div className="create-poll-details">
          <div>
            <h2>New Poll</h2>
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <div>
                    <h3>Choice One</h3>
                  </div>
                  <input 
                   name="optionOne"
                   value={optionOne}
                   onChange={this.handleInputChange}/>
                </div>
                <div style={{ textAlign: "center", margin: ".1rem" }}>
                  <h3>OR</h3>
                </div>
                <div>
                <div>
                    <h3>Choice One</h3>
                  </div>
                  <input 
                   name="optionTwo"
                   value={optionTwo}
                   onChange={this.handleInputChange}/>
                </div>
                <div>
                  <button
                  disabled={optionOne === '' || optionTwo === ''}
                   type="submit">Add Poll</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(NewQuestions);