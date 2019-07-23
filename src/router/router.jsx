import React  from 'react';
// import { Router, Route, Link } from 'react-router'
import { HashRouter as Router, Route } from "react-router-dom";
// <HashRouter> 使用 URL 的 hash 部分（即 window.location.hash）来保持 UI 和 URL 的同步。
// Switch只能在 <Switch> 组件内使用 <Redirect from>，以匹配一个位置。有关更多细节，请参阅 <Switch children>。
// Route它最基本的职责是在其 path 属性与某个 location 匹配时呈现一些 UI。
// <Redirect> 会导航到一个新的位置。新的位置将覆盖历史堆栈中的当前条目，例如服务器端重定向（HTTP 3xx）

import Index from '../pages/Informations/index/index'
import Details from '../pages/Informations/details'
import Lists from '../pages/Informations/list'
import notFound from '../pages/Informations/404'

// import NotFound from '../pages/Informations/404'
class RouteMap extends React.Component {
  updateHandle() {
      console.log('每次router变化之后都会触发')
      
  }
  componentDidMount() {
    console.log(this.props.location);
  }
  render() {
      return (
        <Router>
          <Route path="/" exact component={Index}/>
          <Route path="/404"  component={notFound}/>
          <Route path="/index" component={Index} />
          <Route path="/details" component={Details}/>
          <Route path="/list" component={Lists}/>
        </Router>
      )
  }
}

export default RouteMap;