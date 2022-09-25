declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      ETH_PRIVATE_KEY: string;
      ALCHEMY_KEY: string;
      TABLE_NAME: string;
    }
  }
}

export {}
