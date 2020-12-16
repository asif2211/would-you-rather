import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavigationBar from "./components/Navbar/Navbar";

import NewQuestion from "./components/Newquestions/NewQuestions";
import Questions from "./components/Questions/Questions";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Dashbord from "./components/Dashboard/Dashbord";
// import PageNotFound from './PageNotFound';
import { BrowserRouter as Router } from 'react-router-dom';
class PrivateApp extends Component {
  render() {
    return (
		<Router>
      <div>
		
        <NavigationBar />
        <Route path="/" exact component={Dashbord} />
        <Route path="/questions/:id" component={Questions} />
        <Route path="/create" component={NewQuestion} />
        <Route path="/leaderboard" component={Leaderboard} />
		
      </div>
	  </Router>
	  
    );
  }
}

export default PrivateApp;
