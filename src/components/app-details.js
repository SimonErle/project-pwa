import React, {Component} from 'react';
import './app-details.css';

class AppDetails extends Component{
  render() {
    let company;
    if ((this.props.company !== null) && (this.props.company !== ''))  {
      company = this.props.company;

      if ((this.props.address !== null) && (this.props.address !== '')) {
        company += ' ~ ' + this.props.address;
      }
    }
    else {
      if ((this.props.address !== null) && (this.props.address !== '')) {
        company = this.props.address;
      }
    }
    return (
        <div className='div-details'>
        <p>{company}</p>
      </div>
    );
  }
}

export default AppDetails;
