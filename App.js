//integração  entre redux react atraves do provider fornece store aos componebtes
import React from 'react';
import container from './navegacao/LugaresNavigator';
import { createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from  'react-redux';
import reduxThunk from 'redux-thunk';
import lugaresReducer from './store/lugares-reducer';

const rootReducer = combineReducers({
  lugares: lugaresReducer
})
const store = createStore(rootReducer,applyMiddleware(reduxThunk));

export default function App() {
  return <Provider store={store}>
    {container}
    </Provider>
}