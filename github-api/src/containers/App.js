import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchUsers, loadingState, plusPage, minusPage } from '../actions';


// Components
import GithubUsers from './github_users';

// Styles
import '../resources/styles/styled-App.sass';

//const arr = [...Array(5).keys()];

const GITHUB_SEARCH = `https://api.github.com/search/users?q=`;
//const PAGE = `&page=${this.props.page.pageNr}`
const SEARCH_LIMIT = '&per_page=8';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local: [],
      isLoading: false
    }
    this.inputVal = React.createRef();
    this.btnPlus = React.createRef();
    this.btnMinus = React.createRef();
  }

  handleSubmit = e => {
    this.props.loadingState(true)
    const pageNr = `&page=${this.props.page.pageNr}`
    axios
    .get(`${GITHUB_SEARCH}${this.state.local}${pageNr}${SEARCH_LIMIT}`)
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

  handlePlus = () => {
    this.props.plusPage()
  }

  handleMinus = () => {
    if (this.props.page.pageNr > 1) {
      this.props.minusPage()
    }
  }
  
  render() {
    // console.log(this.state.isLoading)
    // console.log(this.state.pageNumber)
    console.log(this.props.page.pageNr)
    return (
      <div className='mainBody'>
        <div className='formContainer'>
          <form className='searchForm' onSubmit={this.handleSubmit} >
                  <input 
                  type='text' 
                  placeholder='Type username'
                  ref={this.inputVal} 
                  onChange={this.handleChange} />
                  <button type='submit'>Search</button>
                  <div className='pagesNavigation'>
                    <button onClick={this.handleMinus}>Prev</button>
                    <button onClick={this.handlePlus}>Next</button>
                  </div>
          </form>
          {/* <button onClick={() => this.props.fetchUsers(this.state.local)}>fetch_users</button> */}
        </div>
          <div className='gitContainer'>
            <GithubUsers loading={this.state.isLoading} page={this.props.page}/>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { page: state.pageNumber}
}

export default connect(mapStateToProps, { fetchUsers, loadingState, plusPage, minusPage })(App);
