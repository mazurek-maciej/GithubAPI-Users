// Libaries
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// Actions
import { fetchUsers, loadingState, plusPage, minusPage } from '../actions';

// Components
import GithubUsers from './githubUsers';
import Search from '../components/search';

// Styles
import '../resources/styles/styled-App.sass';

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
    const pageNr = `&page=${this.props.page.pageNr}`
    if (this.inputVal === '') {
      this.props.loadingState(true) 
    }
    axios
    .get(`${GITHUB_SEARCH}${this.state.local}${pageNr}${SEARCH_LIMIT}`)
    .then(response => this.props.fetchUsers(response.data.items))
    .then(this.props.loadingState(false))
    .catch(error => this.setState({
      error
    }));
    e.preventDefault();
  }
  
  handleChange = () => {
    this.setState({ local: this.inputVal.current.value })
  }
  
  render() {
    let plus, minus, pageCount;

    if (this.props.usr.users.length > 0) {
      plus = <button onClick={this.props.plusPage}>Next</button>;
      pageCount = <p>{this.props.page.pageNr}</p>
      
      if (this.props.page.pageNr > 0) { 
        minus = <button onClick={this.props.minusPage}>Prev</button>;
      }
    }

    return (
      <div className='mainBody'>
        <h1>Search for people on Github!</h1>
          <div className='formContainer'>
            <Search 
              handleSubmit={this.handleSubmit} 
              handleChange={this.handleChange} 
              inputVal={this.inputVal} 
              plus={plus} 
              minus={minus} 
              pageCount={pageCount} 
            />
          </div>
          <div className='gitContainer'>
            <GithubUsers loading={this.state.isLoading} page={this.props.page}/>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    page: state.pageNumber,
    usr: state.addUser
  }
}

export default connect(mapStateToProps, { fetchUsers, loadingState, plusPage, minusPage })(App);
