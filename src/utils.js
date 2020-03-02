import axios from 'axios';
export const fetchWeather = async (cityName, unit) => {
    // const API_KEY = "d29e9cce44012ae03806fcd9edc39a4e";
    const API_KEY = "08b88cc8686401a7f16cf2b1f37c2464";
    // TODO: fetch weather forecast from endpoint
    // from https://openweathermap.org/api

    const res =  await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=${unit}`);
    const weekDays = {};
    const fiveDayForecast = [];
    res.data.list.forEach(({weather, main:temp, dt_txt}) =>{
        const { main:sky, description, icon } = weather[0];
        const dayOfWeek = new Date(dt_txt).toLocaleDateString('en-US',{weekday: 'long'});
        const weekDayNames = {};
        if(!(dayOfWeek in weekDays)){

            weekDays[dayOfWeek] =+ 1;
            weekDayNames[dayOfWeek] = {
                temp,
                sky,
                description,
                'iconLink' : `http://openweathermap.org/img/wn/${icon}@2x.png`,
                'unit' : unit === 'imperial' ? 'F':'C'
            };

            fiveDayForecast.push(weekDayNames);
        }
    });
    const data = {'city': cityName,'weather':fiveDayForecast};
    return data;
};