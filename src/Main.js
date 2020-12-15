import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import NavigationBar from './components/Navbar/Navbar';
import Home from './components/Dashboard/Dashbord';
import Login from './pages/Login'
import NewQuestion from './components/Newquestions/NewQuestions';
import QuestionPage from './components/Questions/Questions';
import LeaderBoard from './components/Leaderboard/Leaderboard';
import Dashbord from './components/Dashboard/Dashbord';
// import PageNotFound from './PageNotFound';

class PrivateApp extends Component {
	
	render() {
		
	
	
		return (
			
				<div>
					<NavigationBar />
					<main>
						
							<Route path="/" exact component={Dashbord} />
							<Route path="/questions/:id" component={QuestionPage} />
							<Route path="/add" component={NewQuestion} />
							<Route path="/leaderboard" component={LeaderBoard} />
							
						
					</main>
                    </div>
			
		);
	}
}

export default PrivateApp;
