// Libaries
import React, { Component } from 'react'
import { connect } from 'react-redux';

// Components
import FetchedUsers from '../components/fetched_users';

// Styles
import '../resources/styles/styled-githubUsers.sass';


class GithubUsers extends Component {
    render() {
        if (this.props.loading.isLoading) {
            return <div>Loading</div>
        }
        return (
            <div className='mainBox'>
                <FetchedUsers users={this.props.user.users} />
            </div>

        )
    }
}

const mapStateToProps = state => {
    return { 
        user: state.addUser,
        loading: state.loadingState,
        page: state.pageNumber
     }
}

export default connect(mapStateToProps)(GithubUsers);