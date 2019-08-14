// 所有页面的模版页
import React from 'react'
import Router from '../router/router' 
import Footer from '../components/footer'
class App extends React.Component{
  render(){
    return (
      <div className="container">
        {/* <p>我是公用的header</p> */}
        {/* <div>{ this.props.children }</div> */}
        <Router/>
        <Footer/>
      </div>
    )
  }
}
export default App;