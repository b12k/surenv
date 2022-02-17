<!-- markdownlint-disable -->

# **<div align="center">Surenv (Sure + Env)</div>**

<div align="center">
  <img src="./logo.png" alt="Envsure">
  <p>Handy environment variables reader with some extra features</p>
  <a href="https://codeclimate.com/github/b12k/branch-name-lint/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/90a30843ffa0d0410003/maintainability">
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

const { required, optional } = new Surenv();

export default {
  ...required(
    'NODE_ENV',
    'SERVER_ENV',
    'OTHER_VERY_IMPORTAN_VAR',
  ),
  ...optional(
    'NOT_IMPORTANT_VARIABLE',
    'THIS_ONE_ALSO_NOT_IMPORTANT'
  ),
}
```

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
   * Are empty string values allowed?
   * [Default]: false
   */
  allowEmpty?: boolean;
  /**
   * Can it "console.error" when variable is missing?
   * [Default]: true
   */
  canWarn?: boolean;
  /**
   * Can it throw an error when variable is missing?
   * [Default]: true
   */
  canThrow?: boolean;
  /**
   * Can it "process.exit(1)" when variable is missing?
   * [Default]: false
   */
  canExit?: boolean;
};
```
