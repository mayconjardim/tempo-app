export interface Weather {
  weather: WeatherInfo[];

  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    countery: string;
  };
}

interface WeatherInfo {
  main: string;
  icon: string;
}
