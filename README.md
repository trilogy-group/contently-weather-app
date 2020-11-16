# Technical Assessment - Javascript and React

## Implementation Summary

There have been no major changes to the application set up. To setup the
application run 'npm install' and then 'npm start'. During the project I left comments
to explain some of the decisions that I felt reflected the way that project was completed. To search for a location, enter a valid zip code and hit enter. In order to share a weather report just copy the URL after you have searched for a zip code. To switch between fahrenheit and celcius click the links the 'F' and 'C' buttons at the top.

All of the user stories have been completed however there are definitely many ways to expand funcionality. One of the most important features I feel would be important is a fuzzy search for the weather location. Currently the search feature allows you to search through zip code. It would be a better user experience if users could find the weather with an ambiguous city name, a zipcode and coordinates. In order to implement this feature, I would create a module for the CitySearch component that determines which API query method necessary given their input. This would also require a Rails API to fuzzysearch their query and return the proper city token.

In full disclosure, this is my first time using the React library. My traditional stack is Rails and Vue. There are definitely some conceptual differences between the two which some getting used to. This being said, it was a pleasure learning a new library and I look forward to continuing to using React. Thank you for taking the time to look over codebase.

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
    - [ ] `npm install`
    - [ ] `npm start`
- Solve for several or more of the following problems:
    - [ ] As a user, I would like to search for the current weather in my area
    - [ ] As a user, I would like to see the 5-day forecast
    - [ ] As a user, I would like to share the URL of the weather in my area 
        and see the results
    - [ ] As a user, I would like to toggle between celsius and fahrenheit
- Considerations for the work you submitted:
    - [ ] Code actually works.
    - [ ] Application is bootable and usable.
    - [ ] Unit, integration, feature, and or end-to-end testing considered.
    - [ ] Code is of sufficient quality and tidiness.
    - [ ] Includes documentation on how to utilize new features / updates.
- Commit your work with appropriate and informative git commit messages.
- Push your work up to your duplicated git repository (on Github).
- If your repository is private, give the following users access:
    - [ ] [@briandangerflynn](https://github.com/briandangerflynn)
    - [ ] [@jamesconant](https://github.com/jamesconant/)
    - [ ] [@nethanelkohen](https://github.com/nethanelkohen)
- Create a pull request in your repository:
    - [ ] Must target your master branch from your feature branch.
    - [ ] Must list the problems (from above) that you are addressing in your 
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