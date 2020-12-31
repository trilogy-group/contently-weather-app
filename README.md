# Technical Assessment - Javascript and React

## Summary

The purpose of this short assessment is to gain some initial insight in to your
coding style, practices, thought processes, and attention to detail. It is
_not_ intended to be a strictly graded test with specific scores determining
a "pass" or "fail". Just focus on solving the problems outlined how you would
at your current or any other team.

Note that some of the user stories are ambiguous. There are many possible and/or
acceptable solutions to these problems. Use your best judgement to determine
what an appropriate solution is. It would be helpful to also demonstrate or 
explain how you came to your conclusions. You may be asked to explain your
solutions if it's not immediately clear what your reasoning was. Additionally,
you may be asked to pair with a Contently engineer to further expand on your
work.

## Instructions

- [Create either a public or private duplicate of this repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository).
- Time-box your efforts to 2 to 4 hours.
- Setup application
    - [x] `npm install`
    - [x] `npm start`
    - [x] `nvm use` (Added .nvmrc file to ensure node version is correct when installing)
- Solve for several or more of the following problems:
    - [x] As a user, I would like to search for the current weather in my area
    - [x] As a user, I would like to see the 5-day forecast
    - [x] As a user, I would like to share the URL of the weather in my area
        and see the results
    - [x] As a user, I would like to toggle between celsius and fahrenheit
- Considerations for the work you submitted:
    - [x] Code actually works.
    - [x] Application is bootable and usable.
    - [x] Unit, integration, feature, and or end-to-end testing considered.
          - Jest and capybara are the tools I would use for unit/e2e testing. Our main pain point/integration point we would
            want to test is the integration with the 3rd party apis.  We would like to ensure that the results returned from them
            have not changed and still allow our UI to function correctly.
    - [x] Code is of sufficient quality and tidiness.
    - [x] Includes documentation on how to utilize new features / updates.
          You can search for any city in the world.  After selecting a new city it will take you to the forcast route.
          The forcast route it the lat long position of the city.  To share your url with your friends you will need the lat long
          position of the city you wish to know the weather of.  A problem I forsee with this implementation is that most users don't
          know their current location in lat long.  You could argue that the route could also take in a city name and translate it to lat long
          something I didn't have time to implement.
- Commit your work with appropriate and informative git commit messages.
- Push your work up to your duplicated git repository (on Github).
- If your repository is private, give the following users access:
    - [ ] [@briandangerflynn](https://github.com/briandangerflynn)
    - [ ] [@jamesconant](https://github.com/jamesconant/)
    - [ ] [@nethanelkohen](https://github.com/nethanelkohen)
- Create a pull request in your repository:
    - [x] Must target your master branch from your feature branch.
    - [x] Must list the problems (from above) that you are addressing in your
        PR.
- Email Contently staff to let them know your Pull Request is ready for review:
    - [ ] Email [jconant@contently.com](jconant@contently.com)
- Contently staff will review your code, possibly asking questions or providing
    suggestions. We will attempt to review your assessment in a timely manner
    and simply ask that you attempt to respond in a timely manner as well.
- Once the review is complete, Contently staff will determine the next steps to
    be taken.

## Thanks!

Thank you for taking the time to complete this assessment. As engineers,
ourselves, we are sensitive to the time and energy it takes to go through this
process once, much less at numerous companies. Your interest is greatly
appreciated and we are excited to see if Contently is the next journey in your
career.
