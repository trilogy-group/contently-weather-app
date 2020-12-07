import cloudy from "./cloudy.png";
import rainy from "./rainy.png";
import sunny from "./sunny.png";
import sun from "./sun.svg";

export const getWeatherPic = weather => {
  switch(weather) {
    case "Clouds": return cloudy;
    case "Thunderstorm": return rainy;
    case "Drizzle": return rainy;
    case "Rain": return rainy;
    case "Snow": return rainy;
    case "Atmosphere": return sun;
    case "Clear": return sunny;
    default: return sun;
  }
}

export default getWeatherPic;