import React, {Component} from 'react';
import './app-person.css';

class AppPerson extends Component{
  render() {
    return (
      <table className="table-person">
        <tr>
          <td className="td-name">{this.props.name}</td>
          <td><img className='td-avatar' src={this.props.avatar} /></td>
        </tr>
        <tr className="td-descr">{this.props.descr}</tr>
      </table>
    );
  }
}

export default AppPerson;
