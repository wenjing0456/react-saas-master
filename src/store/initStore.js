import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import Reducer from './reducers'
import * as index from './index/renducer'


let store  = createStore(
  combineReducers({...index}),
  applyMiddleware(thunk)
)

export default store;


// export function initStore(rootReducer, initialState){
//   let finalCreateStore = compose(
//     applyMiddleware(thunk)
//   )(createStore)
//     return finalCreateStore(rootReducer, initialState)
// }

// export default initStore(Reducer);
