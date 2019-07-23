import React from 'react';

class Toast extends React.Component{
  render(){
    return(
      <div className="toastWrap">{this.props.text}</div>
    );
  }
}

export default Toast;