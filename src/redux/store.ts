import {legacy_createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { characterReducer } from './reducers/character-reducer';


const combine = combineReducers({character:characterReducer})

export const store = legacy_createStore(combine, applyMiddleware(thunk))


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;