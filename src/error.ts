export class SurenvError extends Error {
  constructor(envVars: string) {
    super(`[SurenvError] Missing required environment variables: ${envVars}`);
  }
}
