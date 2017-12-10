# react-js-boilerplate

React-js-boilerplate is a Universal React boilerplate that uses Webpack 


## Getting started

First, clone the project:

```bash
$ git clone https://github.com/mojomoth/react-js-boilerplate.git <project-name>
$ cd <project-name>
```

### Branches

Just in case you do not need some features, different branches are provided in this project.

| Branch | Description                                     |
|--------|-------------------------------------------------|
| light  | Pure react project environment with SCSS loader |
| hmr    | React-hot-loader                                |
| router | React-router, server render, code-splitting     |

```bash
$ git checkout <branch>
```

Then, install the dependencies. It is recommended to use Yarn, (because it is blazing fast). You can still use npm as well.

```bash
$ yarn install # or npm install
```

## Script usage

You can execute the scripts below by `yarn run <script>` or `npm run <script>`.

| Command        | Description                                                   |
|----------------|---------------------------------------------------------------|
| start          | Starts webpack development server; served at `localhost:7000` |
| build          | Bundles the source in `~/build` directory                     |

## Directory structure

```
- config               # webpack configuration files
- src                  # application source code 
----- components       # directory for presentational components
```
