import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import AppPerson from './components/app-person.js';
import AppDetails from './components/app-details.js';

class App extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      name: '',
      bio: '',
      company: '',
      location: '',
      avatar: '',
      site: '',
      errorsearch: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleChange(e) {
    this.setState({username: e.target.value});
  }
  handleKeyPress(e) {
      if (e.key === 'Enter') {
        axios.get('https://api.github.com/users/'+this.refs.refsearch.value)
          .then(response => this.setState({
            name: response.data.name,
            bio: response.data.bio,
            company: response.data.company,
            location: response.data.location,
            avatar: response.data.avatar_url,
            site: response.data.blog,
            errorsearch: false
          }))
          .catch(response => this.setState({
            name: '',
            bio: '',
            company: '',
            location: '',
            avatar: '',
            site: '',
            errorsearch: true
          }))
      }
    }
  render() {
    return (
      <div className='App'>
        <div className='App-input'>
          <input className={(this.state.errorsearch) ? 'input-search-error' : 'input-search'} ref='refsearch' type='text' onChange={this.handleChange} value={this.state.value} onKeyPress={this.handleKeyPress} />
        </div>
        <div className='App-details'>
          <AppPerson name={this.state.name} descr={this.state.bio} avatar={this.state.avatar} />
          <hr />
          <AppDetails company={this.state.company} address={this.state.location} site={this.state.site} />
        </div>
      </div>
    );
  }
}

export default App;
