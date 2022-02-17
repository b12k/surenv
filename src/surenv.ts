import {
  SurenvConfig,
  PartialSurenvConfig,
} from './types';

import { SurenvError } from './error';

export class Surenv {
  private readonly config: SurenvConfig = {
    prefix: '',
    allowEmpty: false,
    shouldExit: false,
    shouldWarn: true,
    shouldThrow: true,
  };

  constructor(config: PartialSurenvConfig = {}) {
    this.config = {
      ...this.config,
      ...config,
    };
  }

  required = <T extends string[]>(...params: T): Record<T[number], string> => {
    const env: Record<string, string> = {};

    params.forEach((key) => {
      const prefixedKey = this.config.prefix && `${this.config.prefix}_${key}`;

      const value = process.env[prefixedKey] || process.env[key];

      const isMissing = this.config.allowEmpty
        ? value === 'undefined'
        : value === '' || value === 'undefined';

      if (isMissing) {
        const missingVars = prefixedKey
          ? `"${key}" or "${prefixedKey}"`
          : `"${key}"`;

        const error = new SurenvError(missingVars);

        if (this.config.shouldWarn) {
          console.error(error.message);
        }
        if (this.config.shouldThrow) {
          throw error;
        }
        if (this.config.shouldExit) {
          process.exit(1);
        }

        return;
      }

      env[key] = value as string;
    });

    return env;
  };

  optional = <T extends string[]>(...params: T): Record<T[number], string | undefined> =>{
    const env: Record<string, string | undefined> = {};

    params.forEach((key) => {
      const prefixedKey = this.config.prefix && `${this.config.prefix}_${key}`;

      env[key] = process.env[prefixedKey] || process.env[key];
    });

    return env;
  };
}