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


