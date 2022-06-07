export interface WeatherState {
	weatherItems: WeatherProps[],
}

export enum ActionTypes {
	SET_WEATHER = 'SET_WEATHER',
}

export interface SetWeatherAction {
	type: ActionTypes.SET_WEATHER;
	payload: WeatherProps[];
}

export type weatherAction = SetWeatherAction