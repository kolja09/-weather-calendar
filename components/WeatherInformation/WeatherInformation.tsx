import React from "react";

import WeatherForTheDay from "../WeatherForTheDay";

import { IWeatherInformation } from "./types";

import {
	CloseButton,
	Container,
} from "./WeatherInformation.styled";

const WeatherInformation = ({selectedDayData, setActive, setChosenDate}: IWeatherInformation) => {

	const handleClick = () => {
		setChosenDate("");
		setActive(false);
	};

	return (
		<Container>
			<CloseButton onClick={handleClick}>Close</CloseButton>
			<WeatherForTheDay selectedDayData={selectedDayData}/>
		</Container>
	)
}

export default WeatherInformation
