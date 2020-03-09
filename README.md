# JavaScript Homework

To complete this homework, you will work on a simple weather app in JavaScript. Our expectation is that you timebox the effort to 1 to 4 hours. You may work on any of the stories in the list below, but you are not expected to complete them all. Code quality is more important than quantity, we are more interested in how you approach the problems than how many you solve. Some of the user stories are ambiguous, there are many acceptable solutions, use your judgement.

You may be asked to explain your work and pair with a Contently engineer to further enhance the app.

To submit your homework, please update this README with information about which stories you completed, and submit the features as a pull request. The engineering team will provide feedback via a code review.

## User stories to implement

- [ x ] As a user, I would like to search for the current weather in my area
- [ x ] As a user, I would like to see the 5-day forecast
- [ ] As a user, I would like to share the URL of the weather in my area and see the results
- [ x ] As a user, I would like to toggle between celsius and fahrenheit

I chose to omit the third user story as it had the most ambiguous of the requirements, so it was easiest to tackle the straightforward ones first. When the app loads, it'll fetch the data for New York first, but any city can be searched in the search bar up top. I didn't have time to add error handling, so you'll notice an error in the console if you search an invalid city name.

The current weather and the five-day forecast will be shown for the searched city, and you can switch between farenheit and celsius in the dropdown menu.

The UI is very basic, but I did use owfont which is a third party library designed for the OpenWeather API, so this library is able to generate the icons based on the ID of the weather returned from the API.

## Getting started

Install the dependencies.

```bash
npm install
```

Run the application.

```bash
npm start
```
