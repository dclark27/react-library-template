
# Storybook TypeScript React Component Library

Simple to use TypeScript React Component Library with Storybook 5 and test running with Jest.

Compiles all code to a build folder for exporting. Creates a static version of Storybook site for hosting. Makes assumptions on TypeScript, TSLint, Webpack, and storybook Addon configurations.


## Available Scripts

In the project directory, you can run:

### `npm start`

Starts the storybook site at http://localhost:53217/

### `npm test`

Runs all tests with Jest and React-Test-Renderer

### `npm run test:update`

Runs all tests and updates snapshots for jest and create a coverage report

### `npm run test:coverage`

Runs tests and creates a coverage report

### `npm run build`

Compiles source files into build directory with type annotations upon succesful lint and typescript rules passing.

Builds a static site of storybook to be hosted to your liking.
