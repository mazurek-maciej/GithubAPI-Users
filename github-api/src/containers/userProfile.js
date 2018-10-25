// Libaries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Components
import ProfileDetail from '../components/profile_detail';
import ProfileRepos from '../components/profile_repos';

// Styles
import '../resources/styles/styled-userProfile.sass';
import loading from '../resources/styles/loading.gif';

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
}

export default connect()(UserProfile)