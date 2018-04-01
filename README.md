
<h1 align="center">jormat-formatters</h1>
<div align="center">
  <strong>Basic formatters for jormat</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/jormat-formatters">
    <img src="https://img.shields.io/npm/v/jormat-formatters.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/jormat-formatters">
  <img src="https://img.shields.io/npm/dm/jormat-formatters.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/jormat-formatters">
    <img src="https://img.shields.io/travis/tiaanduplessis/jormat-formatters.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/jormat-formatters/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/jormat-formatters.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/jormat-formatters/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/jormat-formatters.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/jormat-formatters/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/jormat-formatters.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20jormat-formatters!%20https://github.com/tiaanduplessis/jormat-formatters%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/jormat-formatters.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/jormat-formatters/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#about">About</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## About

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/jormat-formatters.svg)](https://greenkeeper.io/)

Some basic formatters for [jormat](https://github.com/tiaanduplessis/jormat).

## Install

```sh
$ npm install jormat-formatters
# OR
$ yarn add jormat-formatters
```

## Usage

```js
const formatters = require('jormat-formatters')

console.log(formatters)
// { minutes:
//     [ [ 'minutes', 60 ],
//       [ 'hours', 24 ],
//       [ 'days', 365 ],
//       [ 'years' ] ],
//    milliseconds:
//     [ [ 'milliseconds', 1000 ],
//       [ 'seconds', 60 ],
//       [ 'minutes', 60 ],
//       [ 'hours', 24 ],
//       [ 'days', 365 ],
//       [ 'years' ] ],
//    seconds:
//     [ [ 'seconds', 60 ],
//       [ 'minutes', 60 ],
//       [ 'hours', 24 ],
//       [ 'days', 365 ],
//       [ 'years' ] ],
//    bytes:
//     [ [ 'bytes', 1024 ],
//       [ 'kilobytes', 1024 ],
//       [ 'megabytes', 1024 ],
//       [ 'gigabytes', 1024 ],
//       [ 'terabytes' ] ],
//    kilobytes:
//     [ [ 'kilobytes', 1024 ],
//       [ 'megabytes', 1024 ],
//       [ 'gigabytes', 1024 ],
//       [ 'terabytes' ] ] }
```

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/jormat-formatters/issues).

## License

Licensed under the MIT License.
