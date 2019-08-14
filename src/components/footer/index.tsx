import React from 'react'
import '../footer/footer.scss'
class Footer extends React.Component {

  render() {
    return(
      <div className="footer-container">
        <ul className="footer-inner-wrap">
          <li>
            <img src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt=""/>
            <span>首页</span>
          </li>
          <li>
            <img src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt=""/>
            <span>发现</span>
          </li>
          <li>
            <img src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt=""/>
            <span>订单</span>
          </li>
          <li>
            <img src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed" alt=""/>
            <span>我的</span>
          </li>
        </ul>
      </div>
    )
  }
}
export default Footer;