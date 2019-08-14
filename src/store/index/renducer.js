import actionType from './actionTypes'
const defaultState = {
  RESTAURANT_LIST:[]
};

export default function reducer(state = defaultState, action = {}){
  switch (action.type) {
    case actionType.RESTAURANT_LIST:
      return {
        ...state,
        restList:action.data
      }
    default:
      return state;
  }
}