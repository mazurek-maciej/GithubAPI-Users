// Libaries
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// Actions
import { fetchActionUsers, loadingState, plusPage, minusPage } from '../actions';

// Components
import GithubUsers from './githubUsers';
import Search from '../components/Main/Search/search';

// Styles
import './styled-App.sass';


// Constants
const GITHUB_SEARCH = `https://api.github.com/search/users?q=`;
const SEARCH_LIMIT = '&per_page=6';

// Main App
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local: [],
      isLoading: false,
      error: null
    }
    this.inputVal = React.createRef();
  }

  handleSubmit = e => {
    this.props.loadingState(true)  
    if (this.inputVal.current.value === '') {
      return alert('Enter login before start searching')
    }
    this.getUsers();
    e.preventDefault();
  }
  
  handleChange = () => {
    this.setState({ local: this.inputVal.current.value })
  }
  render() {
    console.log(this.props.loadIndicator.isLoading)
    return (
      <div className='mainBody'>
        <h1>Search for people on Github!</h1>
            <Search 
              handleSubmit={this.handleSubmit} 
              handleChange={this.handleChange} 
              inputVal={this.inputVal} 
              users={this.props.users.users}
              actionPlus={this.props.plusPage} 
              actionMinus={this.props.minusPage} 
              page={this.props.page}
            />
            <GithubUsers loading={this.state.isLoading} page={this.props.page}/>
      </div>
    );
  } 

  getUsers() {
    this.props.loadingState(true)
    const pageNr = `&page=${this.props.page.pageNr}`
    axios
    .get(`${GITHUB_SEARCH}${this.state.local}${pageNr}${SEARCH_LIMIT}`)
    .then(response => this.props.fetchActionUsers(response.data.items))
    .then(this.props.loadingState(false))
    .catch(error => this.setState({
      error
    }));
  }
}


const mapStateToProps = state => {
  return { 
    page: state.pageNumber,
    users: state.fetchUsers,
    loadIndicator: state.loadingState
  }
}

export default connect(mapStateToProps, { fetchActionUsers, loadingState, plusPage, minusPage })(App);
