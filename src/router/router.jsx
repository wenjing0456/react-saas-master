import React  from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import Index from '../pages/index/index/index'
import Details from '../pages/index/details'
import Lists from '../pages/index/list'
import notFound from '../pages/index/404'
import Demo from '../pages/index/demo'
class RouteMap extends React.Component {
  updateHandle() {
      console.log('每次router变化之后都会触发')
  }
  componentDidMount() {
    // console.log(this.props.location);
  }
  render() {
      return (
        <Router>
          <Route path="/" exact component={Index}/>
          <Route path="/404"  component={notFound}/>
          <Route path="/index" component={Index} />
          <Route path="/details" component={Details}/>
          <Route path="/list" component={Lists}/>
          <Route path="/demo" component={Demo}/>
        </Router>
      )
  }
}

export default RouteMap;