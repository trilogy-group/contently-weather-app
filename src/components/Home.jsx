import React from "react";

const Home = () => {
  return (
    <div className="max-w-3xl mt-10 m-auto text-center bg-white shadow">
      <div className="relative border rounded-md py-10 px-4">
        <div className="flex-shrink-0">
          <img className="m-auto h-40 w-40 mb-10" src="https://clipartion.com/wp-content/uploads/2017/06/clipart-cartoon-sun.png" alt="Sunny Icon" />
        </div>
        <h1>Welcome to Contently Weather Service!</h1>
        <span className="text-base">Use the search bar to find the weather for a city you're interested in</span>
      </div>
    </div>
  );
}

export default Home;