import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { rootReducer } from './redux/reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

root.render(app);
