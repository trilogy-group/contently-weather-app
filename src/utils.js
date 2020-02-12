import axios from 'axios';

export const fetchWeather = (apiType) => (params) => {
  return new Promise((resolve, reject) => {
    const {
      cityName,
      zipcode,
      timeframe = 1,
    } = params;
    const apiTypes = ['forecast', 'weather'];
    if(!apiTypes.includes(apiType) || !(cityName || zipcode)) {
      reject('Insufficient data to make request');
    }
    const API_KEY = "YOUR API KEY HERE";
    const BASE_URL = "https://api.openweathermap.org/data/2.5";
    return axios.get(
      `${BASE_URL}/${apiType}?q=${cityName}&cnt=${timeframe}&appid=${API_KEY}`,
    )
      .then((res) => {
        if(res.status === 200) {
          const weatherData = timeframe > 1 ?
            res.data.list.map((d) => formatWeatherData(d)) : 
            [formatWeatherData(res.data)];
          resolve(weatherData);
        } else {
          reject('Invalid API response', res);
        }
      })
      .catch((err) => {
        console.dir(err);
        reject(err);
      });
  })
};

const KtoC = (degree) => (degree - 273.15);
const FtoC = (degree) => (degree - 32) / 1.8;
const CtoF = (degree) => (degree * 1.8) + 32;

const formatWeatherData = (data) => {
  const {
    main,
    wind,
  } = data;
  const convertedDegreeData = Object.keys(main)
    .reduce((acc, key) => {
      if(key.includes("temp") || key === "feels_like") {
        const { temps } = acc;
        const celsius = KtoC(main[key]);
        const fahrenheit = CtoF(celsius);
        return {
          ...acc,
          temps: {
            C: { ...temps.C, [key]: celsius },
            F: { ...temps.F, [key]: fahrenheit }
          }
        };
      }
      return { ...acc, [key]: main[key] };
    }, { temps: { C: {}, F: {} } } );

  const weather = {
    ...convertedDegreeData,
    ...wind
  }
  return weather;
};
