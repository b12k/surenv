export type SurenvConfig = {
  env: Record<string, string> | NodeJS.ProcessEnv,
  prefix: string;
  isSilent: boolean;
  allowEmpty: boolean;
  shouldWarn: boolean;
  shouldThrow: boolean;
  shouldExit: boolean;
};

export type PartialSurenvConfig = Partial<SurenvConfig>;
