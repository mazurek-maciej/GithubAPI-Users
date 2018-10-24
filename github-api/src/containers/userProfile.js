import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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
        const { userData, repos, isLoading }  = this.state
        console.log(this.state.userData)
        console.log(this.state.repos)
        if (isLoading) {
            return <div>Loading</div>
        }
        return (
            <div>
                <img src={userData.avatar_url} alt={userData.login} />
                <p>{userData.login}</p>
                <p>{userData.public_repos}</p>
                {repos.map(repo => <li key={repo.id}>{repo.id}</li>)}
            </div>
        )
    }
}

export default connect()(UserProfile)