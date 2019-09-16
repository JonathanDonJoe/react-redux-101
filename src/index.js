import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 1. In order to use React with Redux, we need react-redux.
import { Provider } from 'react-redux';

// 2. Create a redux store, so that: Redux exists and the provider has the store
import { createStore } from 'redux';

// 3. Reducers to populate the store.  Reducers go into the rootReducer.  Make individual reducers to go into the rootReducer






ReactDOM.render(<App />, document.getElementById('root'));

