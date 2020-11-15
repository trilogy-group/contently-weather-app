const DailyTemp = (props) => {
  const { city, weatherData } = props;

  return (
    <div className="max-w-md mt-10 m-auto text-center">
      <div className="relative bg-white shadow-md rounded-lg pb-6 px-4">
        <div className="pt-4">
          <div className="flex-shrink-0">
          <h3 className="text-gray-900 text-lg leading-5 font-bold">Today</h3>
            <img className="m-auto h-40 w-40" src={weatherData.image} alt="Sunny Icon" />
            <div className="-mt-4">
              <span className="text-lg italic">{weatherData.description}</span>
            </div>
          </div>
            <h1 className="font-bold">{city}</h1>
            <h1>{weatherData.temp} ° F</h1>
        </div>
      </div>
    </div>
  );
}

export default DailyTemp;
