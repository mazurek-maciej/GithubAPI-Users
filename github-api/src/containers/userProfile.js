import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../resources/styles/styled-userProfile.sass'

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
        this.setState( { isLoading: true })
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
    componentWillMount() {
        this.setState( { isLoading: true })
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
    
    render() {
        // console.log(this.state.userData)
        // console.log(this.state.repos)
        const { userData, repos, isLoading }  = this.state
        if (isLoading) {
            return <div>Loading</div>
        }
        return (
            <div className='profileBody'>
                <div className='profileContainer'>
                    <Link to='/'>⬅</Link>
                    <div className='profileDetail'>
                        <img src={userData.avatar_url} alt={userData.login} />
                        <p>{userData.login}</p>
                        <p>{userData.public_repos}</p>
                        <p>Repositories:</p>
                    </div>
                    <div className='profileRepos'>
                        {repos.map(repo => <li key={repo.id}>{repo.name}</li>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(UserProfile)