declare namespace NodeJS {
  export interface ProcessEnv {
    HOST: string;
    PORT: string;
    WS_HOST: string;
    WS_PORT: string;
    BK_URL: string;
    BK_API_URL: string;
  }
}
