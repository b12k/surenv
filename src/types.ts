export type SurenvConfig = {
  prefix: string;
  allowEmpty: boolean;
  shouldWarn: boolean;
  shouldThrow: boolean;
  shouldExit: boolean;
};

export type PartialSurenvConfig = Partial<SurenvConfig>;
