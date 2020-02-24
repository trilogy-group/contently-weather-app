## Completed User Stories
>User can search for weather by city name. Search will request both current weather and 5 day forecast at the same time. Default view is current weather; however, user can easily switch between current weather and forecast views.

- [ ] As a user, I would like to search for the current weather in my area
- [ ] As a user, I would like to see the 5-day forecast

>City name is added to the URL path upon search. When the App mounts, it checks for a city name in the URL path and gets weather on load. This allows the URL to be shared and have the recipient see the weather.

- [ ] As a user, I would like to share the URL of the weather in my area and see the results

> Buttons in the header allow user to switch between Celsuis and Fahrenheit. This works by swapping the units in the API calls between imperial and metric, and resending the HTTP requests.

- [ ] As a user, I would like to toggle between Celsius and Fahrenheit

## Getting started
Install the dependencies.

```bash
npm install
```

Run the application.

```bash
npm start
```
