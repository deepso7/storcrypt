declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      ETH_PRIVATE_KEY: string;
      WEB3_STORAGE_TOKEN: string;
    }
  }
}

export {}
