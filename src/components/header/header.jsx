import React from 'react';
import './header.scss'
class Header extends React.Component {
  
  render() {
    return (
      <div className="c-sheader-wrap">
        {this.props.name}
      </div>
    );
  }

}

export default Header