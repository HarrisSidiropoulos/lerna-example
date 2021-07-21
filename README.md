# Getting Started

Playground for testing monorepos tools like Lerna and Nx.

## How to initialise the monorepo

In the project directory, you have to run:

```
yarn
yarn lerna bootstrap
yarn lerna run build
```

## How to start

In the project directory, you have to run:

```
yarn lerna run start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```
yarn lerna run test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
yarn lerna run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
