import { useEffect } from "react";

const Forecast = (props) => {
  const { forecastData, isMetric } = props;

  const displayUnit = isMetric ? 'C' : 'F'

  return (
    <div className="px-20">
      <h1 className="text-left font-bold mb-4 text-gray-900">
        The next 5 days forecast
      </h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {forecastData && forecastData.map((data) => (
          <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
          <div className="flex-1 flex flex-col pb-4">
          <h3 className="mt-6 mb-4 text-gray-900 text-lg leading-5 font-bold">{data.date}</h3>
            <img className="w-40 h-40 flex-shrink-0 mx-auto" src={data.image} alt="" />
            <h3 className="mt-6 text-gray-900 text-lg leading-5 font-bold">{data.temp} ° {displayUnit}</h3>
            <span className="text-base">{data.description}</span>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Forecast;
