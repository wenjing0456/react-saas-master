import React from 'react';
import { render } from 'react-dom';
import './common/styles/reset.scss';//reset
import './common/styles/styles.scss'
import App from './pages/App'
import * as serviceWorker from './serviceWorker';
// import store from '@/store/initStore';
import store from './store/initStore';
import { Provider } from 'react-redux';

// ReactDOM.render(<App />, document.getElementById('root'));

render((
  <Provider store={store}>
    <App />
  </Provider>
),document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
