import ajax from '../../api/infoApi'
const Actions = {
  RESTAURANT_LIST: 'RESTAURANT_LIST'
};
export function restaurantLists(data){
  return {
    type : Actions.RESTAURANT_LIST,
    data
  }
}
export function restaurantList(params){
  let _result = ''
  ajax.shopList({ type: 1 })
      .then(function (res) {
        console.log(res)
        _result = res;
      }).catch(function (err) {
        console.log(err)
      })
}