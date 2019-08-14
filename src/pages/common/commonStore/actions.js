/**
 * 公用的actions
 */
import Action from './actionType'



 export function storeCommonInnfo(homeState){
  return {
    type : Action.STORE_COMMON_INFO,
    isLogin:true
  }
 }
 export function successLogin() {
  return {
      type:Actions.SUCCESS_LOGIN,
      isLogin: true
  }
}
export function cancelLogin() {
  return {
      type:Actions.CANCEL_LOGIN,
      isLogin: false
  }
}