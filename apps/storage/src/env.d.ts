declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      ETH_PRIVATE_KEY: string;
    }
  }
}

export {};
