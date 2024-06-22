# Weather App - React + Typescript + Vite

Hello! This is my weather app, below is how to run the project, but you can also see it running in vercel:

* [See app running on Vercel](https://weather-app-murex-psi-69.vercel.app/)

## To start the project, you need install the dependencies using:

```bash
npm install
# or
yarn
```

## Now is just run the app using:

```bash
npm run dev

# or
yarn dev
```

## Tests

- Unfortunately I didn't have enough time available to have good test coverage in the application, but I implemented some basic e2e tests using cypress, but I would definitely do unit tests for the 

## Styles
- To style the application I decided to use styled-components, precisely because I chose to create the components from scratch, as explained below.

- For this reason there is the "src/style" folder where the main theme items and global items are located, the entire application is based on the theme, and in the menu there is a switch that allows you to switch to the light or dark theme.

## Structure
- For this project, I decided to create my own components (located in src/components/ui) because most of the elements I used are customized, and to have this freedom the best option was to create my own UI components.

- For components that are not reused, I chose to use a structure in which this type of component is inserted in the folder of whoever uses it, as you can see in the example, where components only used by home are inserted in /src/pages/home/components

<img width="273" alt="Screenshot 2024-01-25 at 00 14 17" src="https://github.com/Williamdr7/weather-app/assets/59892018/c7a1004a-52b7-41f0-9b59-5d0e15e54aef">

## State management

- For this project I decided to manage state using Context Api, as it has a simple structure to implement and suits the size of the application very well.

## App flow
* For this project I chose to create an initial screen where the user can choose one of the suggested cities or search for any city:

<img width="1080" alt="Screenshot 2024-01-25 at 00 04 27" src="https://github.com/Williamdr7/weather-app/assets/59892018/fcaef381-8933-4b16-8f58-c954e877337d">



* If the api responds with status 200, the user is directed to the specific weather screen for the city being searched:
<img width="1080" alt="Screenshot 2024-01-25 at 00 04 42" src="https://github.com/Williamdr7/weather-app/assets/59892018/94c76d24-1794-420c-9baa-d67a7380cf2e">



* When entering the screen, the main data on the current climate is displayed, then the application searches for data from the next few days and organizes it into user-friendly graphs.
<img width="1080" alt="Screenshot 2024-01-25 at 00 05 02" src="https://github.com/Williamdr7/weather-app/assets/59892018/337d80f5-6e4d-4d9e-9bda-91e85e819a2a">

## Features

### In addition to the proposed main functionality, I also added some items:

* Graphs that make it easier to visualize some important data

* Switch to choose whether to view values ​​in Celsius or Farenheit

* Switch that allows you to switch between light or dark themes to facilitate viewing according to the user's preference


