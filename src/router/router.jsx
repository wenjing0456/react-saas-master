import React  from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import Index from '../pages/Informations/index/index'
import Details from '../pages/Informations/details'
import Lists from '../pages/Informations/list'
import notFound from '../pages/Informations/404'

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