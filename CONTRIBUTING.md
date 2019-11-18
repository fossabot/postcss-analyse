# [PostCSS Analyse](./README.md) / Contributing

-   [Thanks](#thanks)
-   [Continuous Integration](#continuous-integration)
-   [Code Formatting](#code-formatting)
-   [Test](#test)
-   [Publishing](#publishing)

## Thanks

Thanks to all of the [Contributors](https://github.com/dbtedman/postcss-analyse/graphs/contributors) who maintain PostCSS Analyse.

## Continuous Integration

Provided by [GitHub Actions](https://github.com/dbtedman/postcss-analyse/actions?workflow=Test), run on every commit and pull request.

## Code Formatting

Code formatting support provided by [Prettier](https://prettier.io/).

```bash
yarn format
```

## Test

Tested using [Jest](https://jestjs.io/), using test cases defined in the `src/` directory matching `*.spec.ts` pattern.

```bash
yarn test
```

## Publishing

Update `CHANGELOG.md` and `package.json` with details on the updated release version.

Then [Publish a new release](https://github.com/dbtedman/postcss-analyse/releases/new) to trigger publishing a new version of this package.
