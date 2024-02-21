declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      REDIS_URL: string;
      PORT: string;
      CORS_ORIGIN: string;
      SESSION_SECRET: string;
      SMTP_USERNANME: string;
      SMTP_PASSWORD: string;
      BING_COOKIE: string;
    }
  }
}

export {}
