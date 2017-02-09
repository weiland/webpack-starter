# Webpack Starter Kit

## Install

```sh
yarn
```

## Configure

You can specify the browser versions for which you are targeting the app by changing the `env` 
configuration in the `.babelrc`.

```js
["env", {
  "targets": {
    "browsers": ["last 2 versions", "safari >= 7", "ie >= 10"]
  }
}]
```

For more options visit [`preset-env` Options](http://babeljs.io/docs/plugins/preset-env/#options).

## Use

```sh
yarn start
```

## Build

```sh
yarn build
```

## Features

* Eslint
* Webpack 2.2
* Babel 8 with `env` preset
* Native ESModules (thanks to webpack 2.2)
* Minification via Babli
* App content lives in `app/`
* Dev Server supports SSL & HTTP2
* Bundle will be build to `dist/`


## License

ISC

