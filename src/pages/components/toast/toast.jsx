import React from 'react';
import '../toast/toast.scss'
class Toast extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }
  static defaultProps = {//默认的值
    message:{
      name:123,
      age:123
    }
  }
  render(){
    return(
      <div className="toastWrap">
        <p>toast的姓名：{this.props.message.name}</p>
        <p>toast的年龄：{this.props.message.age}</p>
      </div>
    );
  }
}

export default Toast;