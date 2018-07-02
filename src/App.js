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
      avatar: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleChange(e) {
    this.setState({username: e.target.value});
    // axios.get('https://api.github.com/users/'+this.refs.refsearch.value)
    //   .then(response => this.setState({
    //     name: response.data.name,
    //     bio: response.data.bio,
    //     company: response.data.company,
    //     location: response.data.location,
    //     avatar: response.data.avatar_url
    //   }))
  }
  handleKeyPress(e) {
      if (e.key === 'Enter') {
        axios.get('https://api.github.com/users/'+this.refs.refsearch.value)
          .then(response => this.setState({
            name: response.data.name,
            bio: response.data.bio,
            company: response.data.company,
            location: response.data.location,
            avatar: response.data.avatar_url
          }))
      }
    }
  render() {
    return (
      <div className='App'>
        <div className='App-input'>
          <input className='input-search' ref='refsearch' type='text' onChange={this.handleChange} value={this.state.value} onKeyPress={this.handleKeyPress} />
        </div>
        <div className='App-details'>
          <AppPerson name={this.state.name} descr={this.state.bio} avatar={this.state.avatar} />
          <hr />
          <AppDetails company={this.state.company} address={this.state.location}/>
        </div>
      </div>
    );
  }
}

export default App;
