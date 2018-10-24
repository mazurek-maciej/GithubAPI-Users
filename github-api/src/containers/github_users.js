import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Styles
import '../resources/styles/github-Users.sass';


class GithubUsers extends Component {

    render() {
        if (this.props.loading.isLoading) {
            return <div>Loading</div>
        }
        return (
            <div className='mainBox'>
                <div className='mainContainer'>
                    {this.props.user.users.map(user => 
                        <li className='userDetail' key={user.id}>
                            <img  
                            src={user.avatar_url} 
                            alt={user.login} />
                            <p>{user.login}</p>
                            <p>{user.id}</p>
                            <Link to={{pathname: `/user/${user.login}`, props: user.login }}>View</Link>
                        </li>
                    )}
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return { 
        user: state.addUser,
        loading: state.loadingState
     }
}

export default connect(mapStateToProps)(GithubUsers);