import React, { Component } from "react";
import Login from "./pages/Login";
import { handleInitialData } from "./actions/shared";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./components/HomePage/HomePage";
import CreateQuestions from "./components/CreateQuestions/CreateQuestions";
import LeadingPersons from "./components/LeadingPersons/LeadingPersons";
import QuestionsSelections from "./components/QuestionsSelection/QuestionsSelections";
import LoadingBar from 'react-redux-loading';
import {Fragment} from 'react'
class App extends Component {
  //connect redux to react app
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Fragment>
      <LoadingBar/>
      <div>
         
        {!this.props.authedUser ? (
          
          <Login />
        ) : (
          <Router>
            <div>
            
              <Navbar />
              
              <Route path="/" exact component={HomePage} />
              <Route path="/questions/:id" component={QuestionsSelections} />
              {<Route path="/add" component={CreateQuestions} />}
              {/* <Route path="/results/:id" component={AnswersResults} /> */}
              <Route path="/leading" component={LeadingPersons} />
            </div>
          </Router>
        )}
      </div>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};
export default connect(mapStateToProps)(App);
