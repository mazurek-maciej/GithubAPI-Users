// Libaries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Components
import ProfileDetail from '../components/Profile/profile_detail';
import ProfileRepos from '../components/Profile/profile_repos';

// Styles
import './styled-userProfile.sass';
import loading from '../resources/images/loading.gif';

const GITHUB_SEARCH = `https://api.github.com/users/`;

class UserProfile extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            userData: [],
            repos: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState( { isLoading: true });
        this.getUserData();
        this.getRepos();
    }
    
    render() {
        let load;
        const { userData, repos, isLoading }  = this.state
        if (isLoading) {
            load = <img src={loading} alt='loading'/>
        }
        return (
            <div className='profileBody'>
                <div className='profileContainer'>
                {load}
                    <Link to='/'>⬅</Link>
                    <ProfileDetail user={userData} />
                    <ProfileRepos repos={repos} />
                </div>
            </div>
        )
    }

    // Functions 
    getUserData() {
        axios
        .get(`${GITHUB_SEARCH}${this.props.match.params.login}`)
        .then(response => this.setState({
            userData: response.data,
            isLoading: false
        }))
        .catch(error => this.setState({
            error,
          })) 
    }

    getRepos() {
        axios
        .get(`${GITHUB_SEARCH}${this.props.match.params.login}/repos`)
        .then(response => this.setState({
            repos: response.data,
            isLoading: false
        }))
        .catch(error => this.setState({
            error,
        }))
    }
}

export default connect()(UserProfile)