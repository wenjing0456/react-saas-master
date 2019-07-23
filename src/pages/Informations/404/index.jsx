import React from 'react';
import ajax from  '../../../api/infoApi'
class notFound extends React.Component {

  constructor(){
    super()
    this.state = {
      
    }
  }

  componentDidMount(){
    ajax.addAndQueryCheJiPeInfo({type:1})
          .then(function(res){
            console.log(res)
          }).catch(function(){

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