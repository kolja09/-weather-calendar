import {ActionTypes, weatherAction, WeatherState} from "./types";

const initialState: WeatherState = {
	weatherItems: [],
}

const weatherReducer = (state = initialState, action: weatherAction): WeatherState => {
	switch (action.type) {
		case ActionTypes.SET_WEATHER:
			return {
				...state,
				weatherItems: action.payload
			}
		default:
			return state
	}
}

export default weatherReducer