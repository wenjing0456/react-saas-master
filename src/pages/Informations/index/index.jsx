import React from 'react';
import Header from '../../components/header/header';
import { Link } from "react-router-dom";
// import Toast from '../../components/toast/toast'
import data from '../../../mock/inforApi/mock'
import '../index/index.scss'
class Index extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showToast:false
  //   };
  // }
  render() {
    const names = ['张三','小hei','莉莉'];
    // var show = false;
    return (
      
      <div className="home-wrap">
        {/* <RouteMap/> */}
        <Header name='top'/>
        <button className="testToastBtn" onClick={this.showToast}>测试Toast</button>
        {/* {this.show ? <Toast text="加载成功"/> : null} */}
        <p> 遍历数据： </p>
        <ul>
          {
            names.map(function(name,idx){
              return <li key={idx}> hello，{name} !!</li>
            })
          }
        </ul>
        <p> mock数据： </p>
        <ul>
          {
            // data.data.map(function(val,idx){
            //   return <li key={idx}> 我是，{val.name} ，住在:{val.addr}</li>
            // })
          }
        </ul>
        <p>路由:</p>
        <ul className="routerDemo">
          <li><Link to="/">Index></Link></li>
          <li><Link to="/details">cat Demo></Link></li>
          <li><Link to="/list">todo-list Demo></Link></li>
          <li><Link to="/404">404></Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
  showToast = () => { //利用箭头函数
    console.log('click')
    console.log(data)
    // this.setState({
    //     show : true
    // });
    // console.log(this.show)
  };

}

export default Index