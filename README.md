# Deprecated. Just use [TSDX](https://github.com/jaredpalmer/tsdx) from @jaredpalmer instead.


## react-library-template
### (formerly Storybook TypeScript React Component Library)

This repo attempts to solve the problem of how to share react hooks, components, and utilities with your team (or all of your personal projects). There are other solutions out there, such as create-react-library, but they are no longer updated and out of date.

By utilitizing Storybook, we are able to bypass any need for webpack and create-react-app. All component development can be done in isolation and can be published to a github page for other stakeholders to see.

This library uses [TypeScript](https://www.typescriptlang.org/), [react-testing-library](https://github.com/testing-library/react-testing-library), [Jest](https://jestjs.io/), and [ESLint](https://eslint.org/) and has everything preconfigured so you can skip straight to developing.

## Setup

* Clone this template repo by clicking "Use this template" 
* Rename it to your liking (e.g., my-company-react-library) and clone it locally
* Rename the `package.json` name field, add any dependencies you need, and remove any parts of this README you no longer need
* Run this project using the scripts below!

## Developing with another library

Sometimes it is helpful be able to use the latest code as you develop in another project that you intend to consume this library with. 

In order to do so:

* Run `npm run build:watch` in this project
* In your other project, run `npm link ../react-library-template` replacing the folder name with your new repo's name
* Start your other project and you will have access to the compiled code as you write it!

## Available scripts

### `start`

Starts the storybook site at http://localhost:6006/ 

### `build`
**Executes the following sub scripts:**
#### `build:lint`
Lints using eslint (using plugins from jest, jest-dom, react, and react-hooks)
#### `build:library`
Builds your library and copies all css / woff2 / svgs / png files to the build folder
#### `build:storybook`
Creates a static storybook site that you can host

### `test`

Runs all tests with Jest and react-testing-library in watch mode
