import {
	ActionTypes, SetWeatherAction,
} from "./types";
import { apiService } from "../../api/api";
import { AppDispatch } from "../store";

const setWeather = (weatherData: WeatherProps[]): SetWeatherAction => ({
	type: ActionTypes.SET_WEATHER,
	payload: weatherData,
});

export const loadWeather = () => (dispatch: AppDispatch) => {
	apiService.getWeather().then((res) => dispatch(setWeather(res.data.list)))
};