import React, {Component} from 'react';
import './app-details.css';

class AppDetails extends Component{
  render() {
    let information = '';

    if ((this.props.company !== null) && (this.props.company !== ''))  {
      information = this.props.company + ' ~ ';
    }
    if ((this.props.address !== null) && (this.props.address !== '')) {
      information += this.props.address + ' ~ ';
    }
    if ((this.props.site !== null) && (this.props.site !== '')) {
      information += this.props.site;
    }
    else { information = information.substring(0, information.length-2); }

    return (
        <div className='div-details'>
        <p>{information}</p>
      </div>
    );
  }
}

export default AppDetails;
