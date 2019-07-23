import fetch from '../utils/fetch'

export default{
  //添加车辆
  addAndQueryCheJiPeInfo(data) {
      return fetch({
          method: 'get',
          url: `/peccancy/addAndQueryCheJiPeccancyInfo`,
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