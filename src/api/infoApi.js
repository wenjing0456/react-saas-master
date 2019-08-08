import fetch from '../utils/fetch'

export default {
  shopList(data) { //请求商户列表
    return fetch({
      method: 'get',
      url: `/restapi/shopping/v3/restaurants`,
      data
    })
  },
}
// 车辆品牌查询
// export function masterBrand(params) {
//   return fetch({
//       url: '/car/masterBrand' + '?v=' + new Date().getTime(),
//       method: 'get',
//       data: params
//   })
// }