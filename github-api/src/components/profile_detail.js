import React from 'react'
import '../resources/styles/styled-profile_detail.sass'

const ProfileDetail = ({ user }) => (
    <div className='profileDetail'>
        <img src={user.avatar_url} alt={user.login} />
        <p>{user.login}</p>
        <p>Number of repositories: {user.public_repos}</p>
        <p>Repositories:</p>
    </div>
)

export default ProfileDetail;