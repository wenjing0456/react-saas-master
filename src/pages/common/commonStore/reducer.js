/**
 * 公用的reducer
 */
const defaultState = {
  isLogin: true,
}

export default function (state=defaultState,action={}) {

  switch(action.type) {
    case Actions.STORE_COMMON_INFO:
      return 123;
    default:
      return state
  }

}