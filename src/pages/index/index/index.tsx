import React from 'react';
import { connect } from 'react-redux';
//RESTAURANT_LIST
import { restaurantList } from '../../../store/index/action'
import ajax from '../../../api/infoApi';
import './index.scss';
class Index extends React.Component {


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
              <span>东海龙宫三楼A座05室</span>
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
          <div className="mint-swipe foodentry">
            <div className="mint-swipe-items-wrap">
              <ul>
                <li>
                  <div className="iconContainer">
                    <img src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="" />
                  </div>
                  <span className="title">美食</span>
                </li>
                <li>
                  <div className="iconContainer">
                    <img src="https://cube.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="" />
                  </div>
                  <span className="title">大牌惠吃</span>
                </li>
                <li>
                  <div className="iconContainer"><img src="https://cube.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="" /></div>
                  <span className="title">超市便利</span>
                </li>
                <li>
                  <div className="iconContainer"><img src="https://cube.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="" /></div>
                  <span className="title">水果</span>
                </li>
                <li>
                  <div className="iconContainer"><img src="https://cube.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="" /></div>
                  <span className="title">医疗健康</span>
                </li>
                <li>
                  <div className="iconContainer">
                    <img src="https://cube.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="" />
                  </div>
                  <span className="title">浪漫鲜花</span>
                </li>
                <li>
                  <div className="iconContainer">
                    <img src="https://cube.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="" />
                  </div>
                  <span className="title">跑腿代购</span>
                </li>
                <li>
                  <div className="iconContainer"><img src="https://cube.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="" /></div>
                  <span className="title">披萨汉堡</span>
                </li>
                <li>
                  <div className="iconContainer"><img src="https://cube.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="" /></div>
                  <span className="title">厨房生鲜</span>
                </li>
                <li>
                  <div className="iconContainer"><img src="https://cube.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt="" /></div>
                  <span className="title">甜品饮品</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className="shoplist-title">推荐商家</div>
        <div className="home-filter">
          <div className="filter-header">
            <ul>
              <li><span>综合排序</span></li>
              <li><span>距离最近</span></li>
              <li><span>品质联盟</span></li>
              <li><span>筛选</span></li>
            </ul>
          </div>
        </div>
        <section className="shoplist">
          <section className="shopcontainer">
            <div className="index-shopinfo">
              <div className="logo-container">
                <div className="logo-main">
                  <img src="https://cube.elemecdn.com/4/eb/b0c1fdc0945ffa0e575a3383e135dpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt=""/>
                </div>
              </div>
              <div className="index-maininfo">
                <section>11</section>
                <section>22</section>
                <section>33</section>
              </div>
            </div>
            <div className="index-activityWrap">
              <section className="index-tagLine">
                <span>tag1</span>
                <span>tag1</span>
                <span>tag1</span>
              </section>
              <section >
                <div>13</div>
                <div>123</div>
              </section>
            </div>
          </section>
        </section>
        {/* <Footer/> */}
      </div>
    );
  }
  toSearch = () => {
    console.log('search')
  }

}
const mapStateToProps = (state) => {// Redux store 发生改变会被触发
  console.log(state)
  return {
    home: state.home
  }
}
const mapDispatchToProps ={
  restaurantList
};
// export default Index;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)