import ajax from '../../api/infoApi'
// import { async } from 'q';
import Action from './actionTypes';
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
  
  
  // return function(dispatch){
  //   dispatch({

  //   })
  // }
  return async dispatch => {
    let _result = ''
    ajax.shopList({ type: 1 })
      .then(function (res) {
        console.log('0909090')
        console.log(res)
        _result = res;
      }).catch(function (err) {
        console.log(err)
      })
    dispatch({
      type: Action.RESTAURANT_LIST,
      restaurantList:_result
    })
  }
}