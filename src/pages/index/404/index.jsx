import React from 'react';
import ajax from '../../../api/infoApi'
import '../../../mock/inforApi/mock'
class notFound extends React.Component {

  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {
    ajax.shopList({ type: 1 })
      .then(function (res) {
        console.log(res)
      }).catch(function (err) {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="home-wrap">
        <p>找不到页面啦</p>
        {
          
        }
      </div>
    );
  }

}

export default notFound;