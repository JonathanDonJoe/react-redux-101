// This is the root reducer

// 1. Get a method from redux called 'combineReducers'
import { combineReducers } from 'redux';

// 2. Get each individual reducer
// The store is managed by the root reducer
// The manager needs individual departments (reducers)
import frozenReducer from './frozenReducer';
import dairyReducer from './dairyReducer';
import meatReducer from './meatReducer';