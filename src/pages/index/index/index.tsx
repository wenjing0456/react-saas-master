import * as React from 'react';
import ajax from '../../../api/infoApi'
import './index.scss'
class Testts extends React.Component {


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
      <div className="hellow_wrap">
        <header className="header-wrap">
          <div className="header-bd">
            <div className="addr">
              <i className="poi"></i>
              <span>地址Demo呀</span>
              <i className=""></i>
            </div>
          </div>
        </header>
        <div className="search">
          <div className="inputbox" onClick={this.toSearch}>
            <i></i>
            <span>搜索吃饭啦商家、商家商品</span>
          </div>
        </div>
        <div>
          <div className="mint-swipe">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
        </div>
        <div className="shoplist-title">推荐商家</div>
        <div className="home-filter">
          <div className="filter-header">
            <ul>
              <li>综合排序</li>
              <li>距离最近</li>
              <li>品质联盟</li>
              <li>筛选</li>
            </ul>
          </div>
        </div>
        <section className="shoplist">
          <section className="shopcontainer">
            <div>
              <dl>
                <dt></dt>
                <dd></dd>
                <dd></dd>
                <dd></dd>
              </dl>
            </div>
            <div>
            </div>
          </section>
        </section>

      </div>
    );
  }
  toSearch = () => {
    console.log('search')
  }

}

export default Testts;