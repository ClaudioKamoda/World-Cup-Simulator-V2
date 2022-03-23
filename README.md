# World Cup Simulator

2022 is FIFA world Cup year. As a big fan of soccer I decided to build this project to help me play with the possible results.

The **_first phase_** is to have a functional prototype with the current edition of the world cup. (**_in progress_**)

#### Goals:

-   ✓ Refactor the code from the Vue codebase.
-   ✓ Code the logic for changing the match result and instantly changing the group table.
-   Create a new component to handle the final stage of the tornament.
-   Integrate with React Router and create a navbar that allows user to change between group stage and final stage views.

The **_second phase_** is to have a world cup draw simulator as a tab in the application.

The **_third phase_** is to update the app because the format of the competiton is changing after the 2022 edition.

The project will use React.Js and Sass and Redux.

## Configuration

First of all, clone the repo or download the zip and run `npm install` to get the dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project Structure

### Components

**Group.js** - Handles eveything related to group data, it uses **_useEffect_** to check for changes in matches data in store to change the group data shown on screen.

**GroupHead.js and TeamGroupData.js** - Subdivisions of the group table. Mostly used for showing the data and were created to shorten the code.

**GroupNav.js** - The navigation bar on the left side. Used to navigate between groups.

**Match.js** - Shows the match data and dispatches changes made by the user to the store.

**MatchList.js** - Holds all the matches for a group.

## Progress

On March 23 this is the current state of the project:

![Current state](https://github.com/ClaudioKamoda/World-Cup-Simulator-V2/blob/main/src/progressGifs/2022-03-23.gif)
