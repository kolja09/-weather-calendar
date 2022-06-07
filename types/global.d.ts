declare type WeatherProps = {
	dt_txt: string | number,
  main: {
     pressure: number,
	  humidity: number,
	  temp: number
  }
	wind: {
		speed: number,
	}
}