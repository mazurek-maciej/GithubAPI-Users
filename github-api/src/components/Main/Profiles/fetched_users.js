// Libaries
import React from 'react'
import { Link } from 'react-router-dom';

import './styled-fetched_users.sass';

const FetchedUsers = ( { users }) => (
    <div className='mainContainer'>
        {users.map(user => 
            <li className='userDetail' key={user.id}>
                <img  
                src={user.avatar_url} 
                alt={user.login} />
                <p>{user.login}</p>
                <Link to={{pathname: `/user/${user.login}`, props: user.login }}>View</Link>
            </li>
         )}
    </div>
)

export default FetchedUsers;