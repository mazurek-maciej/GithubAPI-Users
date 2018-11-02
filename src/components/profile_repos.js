import React from 'react'
import '../resources/styles/styled-profile_repos.sass'

const ProfileRepos = ({ repos }) => (
    <div className='profileRepos'>
        {repos.map(repo => <li key={repo.id}><a href={repo.html_url}>● {repo.name}</a></li>)}
    </div>
)

export default ProfileRepos;