**now-latest** Get the latest deployment for your now.sh app

[![Build status](https://img.shields.io/circleci/project/github/samtgarson/now-latest.svg)](https://circleci.com/gh/samtgarson/engagement)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

### Usage

```js
import nowLatest from 'now-latest'

const name = 'my-application-name'
const token = process.env.NOW_TOKEN // will use token from ~/.now.json if not provided
const deployment = nowLatest({ name, token })

console.log(deployment)
/*
 * {  
 *    "uid": "6RMU8CJGKtXmdHDjN0YihTrn",
 *    "name": "my-application-name",
 *    "url": "my-application-name-pffgtzmjns.now.sh",
 *    "created": "1486807761884",
 *    "state": "READY",
 *    "scale": {
 *      "current": 1,
 *      "min": 0,
 *      "max": 1
 *    }
 * }
 */
```

### Contribute

Take a look at [micro-starter](https://github.com/samtgarson/micro-starter) for the basics on setting up this application for development.
