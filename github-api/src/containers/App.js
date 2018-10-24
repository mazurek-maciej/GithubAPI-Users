import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchUsers, loadingState } from '../actions';


// Components
import GithubUsers from './github_users';

// Styles
import '../resources/styles/styled-App.sass';

const arr = [...Array(5).keys()];

const GITHUB_SEARCH = `https://api.github.com/search/users?q=`;
const PAGE = `&page=${this.state.pageNumber}`
const SEARCH_LIMIT = '&per_page=6';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local: [],
      pageNumber: 1,
      isLoading: false
    }
    this.inputVal = React.createRef();
    this.btnVal = React.createRef();
  }

  handleSubmit = e => {
    this.props.loadingState(true)
    const page = this.state.pageNumber;
    axios
    .get(`${GITHUB_SEARCH}${this.state.local}${page}${SEARCH_LIMIT}`)
    .then(response => this.props.fetchUsers(response.data.items))
    .then(this.props.loadingState(false))
    .catch(error => this.setState({
      error,
    }))
    e.preventDefault();
  }

  handleChange = () => {
    this.setState({ local: this.inputVal.current.value })
  }
  
  render() {
    console.log(this.state.isLoading)
    console.log(this.state.pageNumber)
    return (
      <div className='mainBody'>
        <div className='formContainer'>
          <form className='searchForm' onSubmit={this.handleSubmit} >
                  <input type='text' ref={this.inputVal} onChange={this.handleChange} />
                  <button type='submit'>Search</button>
          </form>
          {/* <button onClick={() => this.props.fetchUsers(this.state.local)}>fetch_users</button> */}
        </div>
          <div className='gitContainer'>
            <GithubUsers loading={this.state.isLoading}/>
          </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { githubUsers: state.addUser}
// }

export default connect(null, { fetchUsers, loadingState })(App);
