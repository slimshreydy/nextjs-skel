export {};

declare global {
  namespace NodeJS {
    /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
    interface ProcessEnv {
      // Put type definitions for process.env variables here
    }
  }
}
