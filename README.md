# Getting Started with Create React App

    npx create-react-app netflix-gpt
    npm run start

## install tailwind CSS

    npm install -D tailwindcss
    npx tailwindcss init

    in tailwind.config.css,

        /** @type {import('tailwindcss').Config} */
        module.exports = {
        content: [
            "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }

    in index.css,
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

### create components

- created components and Routings
- Login form Validation
- Integrated firebase
- impelemented authentication using Firebase
- created redux store
- updated the displayName and photoURL to the redux store
- signout using firebase API
- Used the useLocation hook in order to dispaly the header
- bug fix: if the user is not logged in, not redirect them to the browse page and vise-versa
- unsubscribed the onAuthStateChange callback
- created constants.js to keep the constant values like URL etc.
- Login to TMDB and get the access token key.
- integrated the APIs with the browse page (fetch API)
- add the movie lists to the redux store
- created custom hook to get the now playing movies list
- created the main and secondary containers for movie trailer and movie lists respectively
- In main container, created VideoTitle and videoBackground components
- Fetched the Trailer videos from TMDB API using custom hook (useMovieVideos)
- added the first trailer video to the redux store and fetch the data from the redux store
- Manipulate the trailer video using youtube embed code in the UI
- Built Secondary container with movie lists
- got CDN API from TMDB for Image card
- Built custom hooks to get different movies lists
- Create GPT Search button on Header
- Create GPT Search page and store the toggle data in redux store
- implement the toggle funtion to show the GPT search page
