<!-- markdownlint-disable -->

# **<div align="center">Surenv (Sure + Env)</div>**

<div align="center">
  <img src="https://bit.ly/surenv-logo" alt="Surenv">
  <p>Handy environment variables reader with some extra features</p>
  <a href="https://codeclimate.com/github/b12k/surenv/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/d865c5ba19138d89fb63/maintainability" />
  </a>
</div>

<!-- markdownlint-enable -->

## Why

Surenv allows you to extract environment variables and provide type definitions
for them.

Using it you may have a "source of truth" environment variables provider for
your app, with good DX by providing autocompletion based on variables requested.

It can prevent application from running if some required environment variables
are missing.

It also support prefixes/namespaces by autocomputing aliases based on provided
configuration.

## Install

`npm i surenv`

## Use

`env-source-of-truth.ts`

```typescript
import Surenv from 'surenv';

// Surenv constructur argument is optional, see below
const { required, optional } = new Surenv({ prefix: 'MY_APP' });

export default {
  // Will try to resolve or fail VAR_NAME or PREFIX_VAR_NAME
  ...required(
    'NODE_ENV',
    'SERVER_ENV',
    'OTHER_VERY_IMPORTANT_VARIABLE',
  ),
  // Will try to resolve VAR_NAME or PREFIX_VAR_NAME
  ...optional(
    'NOT_IMPORTANT_VARIABLE',
    'THIS_ONE_ALSO_NOT_IMPORTANT'
  ),
}
```

`in your editor`

![DX Snapshot](https://raw.githubusercontent.com/b12k/surenv/master/dx-snapshot.jpg)

### Hint 💡

_For better `optional` variables checks set `strictNullChecks` in your
`tsconfig.json` to `true`._

## Configure

Surenv constructor optinally accepts configuration object.

```typescript
type SurenvConfig = {
  /**
   * Prefix to append to requested variable
   * [Default]: undefined
   */
  prefix?: string;
  /**
   * It should ignore errors
   * [Default]: false - when executed in node
   *            true  - when executed in browser
   */
  isSilent?: boolean;
  /**
   * Are empty string values allowed?
   * [Default]: false
   */
  allowEmpty?: boolean;
  /**
   * Can it "console.error" when variable is missing?
   * [Default]: true
   */
  shouldWarn?: boolean;
  /**
   * Can it throw an error when variable is missing?
   * [Default]: false
   */
  shouldThrow?: boolean;
  /**
   * Can it "process.exit(1)" when variable is missing?
   * [Default]: true
   */
  shouldExit?: boolean;
};
```
