import React from "react";
import type { NextPage } from 'next';

import GlobalStyle from "../globalStyles";
import { PageContainer } from "./app.styled";
import WeatherCalendar from "../components/WeatherCalendar/WeatherCalendar";


const Home: NextPage = () => {
	return (
		<>
			<GlobalStyle/>
			<PageContainer>
				<WeatherCalendar/>
			</PageContainer>
		</>

	)
}

export default Home
