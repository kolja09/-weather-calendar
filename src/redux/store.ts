import {
	combineReducers,
	createStore,
	applyMiddleware,
} from "redux";

import thunkMiddleware  from 'redux-thunk';

import weatherReducer from "./weather/weatherReducer";

const rootReducer = combineReducers({
	weatherReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;



