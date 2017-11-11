# Fashion Technologists

A react front-end for Meetup group: meetup.com/fashion-technologists.

![Responsive Screenshots Fashion Technologists Site](public/img/Responsive-Fashion-Technologists.jpg?raw=true "Responsive Screenshots Fashion Technologists Site")

## Table of Contents

- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Updating Live Site](#updating-live)
- [Meetup Connections](#meetup-connections)
- [Wufoo Connections](#wufoo-connections)
- [Fonts](#fonts)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [Updating Live](#updating-live) for more information.

## Updating Live

To update the live site at: https://fashion-technologists.com, in main directory:
1 - npm run build
2 - firebase init
3 - enter (do not select choices, it's configured for: storage and hosting)
4 - firebase deploy
5 - site should be updated live

## Meetup Connections

This site is a front-end only that pulls in data from the meetup group: meetup.com/fashion-technologists.  There is however, some static information.  Here is a quick list of the pages that pull in meetup data:
- /events
  - pulls in detailed data about the upcoming events
  - includes map to venue location
  - and all html (including images) from body of event description
  - To do: fix bug with past events collapse function
- /about
  - group name
  - number of members
  - about
  - location

## Wufoo Connections

This site employs Wufoo forms to collect data.
- /sponsor-form
- /contact

## Fonts

Fonts used in this site come from Adobe Typekit.  Expressly, [Calluna](https://typekit.com/fonts/calluna).
Icons from [Ionic Framwork](https://ionicframework.com/docs/ionicons/).
