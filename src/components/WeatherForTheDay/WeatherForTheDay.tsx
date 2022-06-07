import React from "react";
import moment from "moment";

import {
	InfoBlock,
	InfoContainer,
	DataWeather,
} from './WeatherForTheDay.styled';
import {IWeatherForTheDayProps} from "./types";

const WeatherForTheDay = ({selectedDayData}: IWeatherForTheDayProps) => {

	const kelvinToCelsius = (temp: number) => {
		return temp - 273.15;
	};

	return (
		<InfoContainer>
			<InfoBlock>
				<DataWeather>Data</DataWeather>
				<DataWeather>Temperature</DataWeather>
				<DataWeather>Pressure</DataWeather>
				<DataWeather>Humidity</DataWeather>
				<DataWeather>Wind Speed</DataWeather>
			</InfoBlock>
			{
				selectedDayData.map((s: WeatherProps, idx: number) => (
					<InfoBlock key={idx}>
						<DataWeather>{moment(s?.dt_txt).format("HH:mm")}</DataWeather>
						<DataWeather>{kelvinToCelsius(s.main.temp) > 0 ? ' +' : ' -'}{(kelvinToCelsius(s.main.temp)).toFixed(0)} C</DataWeather>
						<DataWeather>{s.main.pressure}</DataWeather>
						<DataWeather>{s.main.humidity}</DataWeather>
						<DataWeather>{s.wind.speed}</DataWeather>
					</InfoBlock>
				))
			}
		</InfoContainer>
	)
}

export default WeatherForTheDay