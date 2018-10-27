// Libaries
import React, { Component } from 'react'
import { connect } from 'react-redux';

// Components
import FetchedUsers from '../components/Main/Profiles/fetched_users';

// Styles
import './styled-githubUsers.sass';


class GithubUsers extends Component {
    render() {
        if (this.props.loading.isLoading) {
            return <div>Loading</div>
        }
        return (
            <div className='gitContainer'>
                <div className='mainBox'>
                    <FetchedUsers users={this.props.user.users} />
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return { 
        user: state.fetchUsers,
        loading: state.loadingState,
        page: state.pageNumber
     }
}

export default connect(mapStateToProps)(GithubUsers);