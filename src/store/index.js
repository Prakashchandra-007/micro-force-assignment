import {createStore} from 'redux';

import stateReducer from './Reducer';
const store = createStore(stateReducer);
export default store;