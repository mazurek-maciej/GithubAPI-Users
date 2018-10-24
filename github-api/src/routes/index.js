import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../containers/App';
import UserProfile from '../containers/userProfile.js';

const Root= () => (
        <Router>
            <div>
                <Route path='/' exact component={App}/>
                <Route path='/user/:login' component={UserProfile} />
            </div>
        </Router>
)

export default Root;