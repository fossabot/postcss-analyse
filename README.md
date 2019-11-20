# [PostCSS Analyse](https://github.com/dbtedman/postcss-analyse)

[![Package Version](https://badgen.net/npm/v/postcss-analyse?label=Latest&style=flat)](https://www.npmjs.com/package/postcss-analyse)
[![Package Downloads (Weekly)](https://badgen.net/npm/dw/postcss-analyse?label=Downloads&style=flat)](https://www.npmjs.com/package/postcss-analyse)
[![Package License](https://badgen.net/npm/license/postcss-analyse?label=License&style=flat)](https://www.npmjs.com/package/postcss-analyse)
[![Known Vulnerabilities](https://snyk.io/test/github/dbtedman/postcss-analyse/badge.svg?style=flat-square)](https://snyk.io/test/github/dbtedman/postcss-analyse)
[![Maintainability](https://api.codeclimate.com/v1/badges/99c374dda535ed9ecdc8/maintainability)](https://codeclimate.com/github/dbtedman/postcss-analyse/maintainability)
[![Codecov](https://codecov.io/gh/dbtedman/postcss-analyse/branch/master/graph/badge.svg)](https://codecov.io/gh/dbtedman/postcss-analyse)
[![GitHub Actions](https://github.com/dbtedman/postcss-analyse/workflows/Test/badge.svg)](https://github.com/dbtedman/postcss-analyse/actions?workflow=Test)

A [PostCSS](https://postcss.org) plugin which analyses property values to give developers insight into values which should be the same but may differ slightly.

-   [Where do I start?](#where-do-i-start)
-   [What options does it have?](#what-options-does-it-have)
-   [Want to lean more?](#want-to-lean-more)

## Where do I start?

> These instructions are only for this plugin. See the [PostCSS](http://postcss.org) website for framework information.

### Install

Using [Yarn](https://yarnpkg.com/en/package/postcss-analyse)

```bash
yarn add postcss-analyse --exact --dev
```

Using [NPM](https://www.npmjs.com/package/postcss-analyse)

```bash
npm install postcss-analyse --save-dev --save-exact
```

### Configure

Add to your [PostCSS](http://postcss.org) configuration.

```javascript
const Gulp = require("gulp");
const PostCSS = require("gulp-postcss");
const Analyse = require("postcss-analyse");

Gulp.task("css", () =>
    Gulp.src("./src/*.css")
        .pipe(PostCSS([Analyse()]))
        .pipe(Gulp.dest("./dest"))
);
```

## What options does it have?

### Minimal

The minimal required configuration is the prefix selector, as shown in the above example.

```javascript
Analyse();
```

## Want to lean more?

-   See our [Contributing Guide](CONTRIBUTING.md) for details on how this repository is developed.
-   See our [Changelog](CHANGELOG.md) for details on which features, improvements, and bug fixes have been implemented
-   See our [License](LICENSE.md) for details on how you can use the code in this repository.
-   See our [Security Guide](SECURITY.md) for details on how security is considered.
