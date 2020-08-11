# Facelist 👨🏾

Simple react native app that fetches a facelist from the backend and displays this facelist with the user names on the client side.

![Alt Text](https://media.giphy.com/media/YrqxI8AGl17mBIB18q/giphy.gif)

## Getting Started

To use the facelist app, you need the ios simulator, an adroid emulator or even your phone with the expo app installed on it.

For use it on your computer, node and expo-cli are mandatory. Along with that the ios simulator that comes with xcode, or the android emulator that can be created with android studio

### Prerequisites

xcode (for ios)

```
https://developer.apple.com/xcode/
```

android studio (for android)

```
https://developer.android.com/studio/
```

node

```
https://nodejs.org/en/
```

expo

```
https://expo.io/
```

### Installing

Aftet installing the tools required, we will focus on the installation of the app

First clone the project from github

```
git clone https://github.com/matiasdelagente/facelist.git
```

Go to the backend folder, download dependencies and start the server

```
cd backend/
npm install
node index.js
```

Back in the root folder, go to the client folder, download dependencies and start the app

```
cd client/
npm install
npm start
```

### Running

Open your ios simulator (or your android emulator), and press i (or a) to open the app

![Alt Text](https://media.giphy.com/media/jt2EXdTh1rha6PKNqA/giphy.gif)

## Running the tests

To run the app tests, simply use npm with the 'test' task in the client folder

```
cd client/
npm run test
```

## Built With

- [React Native](https://reactnative.dev/) - React Native
- [Expo](https://expo.io/) - Expo
- [Typescript](https://www.typescriptlang.org/) - Typescript
- [Jest](https://jestjs.io/) - Jest

## Authors

- [Matias Benincasa](https://github.com/matiasdelagente)
