import React, { Component } from "react";
import Login from "./pages/Login";
import { handleInitialData } from "./actions/shared";
import { connect } from "react-redux";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navbar from './Navbar';
import HomePage from './components/HomePage/HomePage'
import UnansweredQuestions from "./components/UnansweredQuestions/UnansweredQuestions";
class App extends Component {
  //connect redux to react app
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        {!this.props.authedUsers ? (
          <Login />
        ) : (
          <Router>
            <div>
              <Navbar/>
              <Route path="/" exact component={HomePage} />
              <Route path="/questions/:id" component={UnansweredQuestions} />
        {<Route path="/add" component={NewQuestion} /> }
        {/* <Route path="/leaderboard" component={Leaderboard} /> */}
            </div>
          </Router>
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ authedUsers }) => {
  return {
    authedUsers,
  };
};
export default connect(mapStateToProps)(App);
