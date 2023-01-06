declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SUAP_CLIENT_ID: string;
      SUAP_REDIRECT_URI: string;
      SUAP_URL: string;
      SUAP_SCOPE: string;
      
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;

      NEXTAUTH_URL: string;
      NEXTAUTH_SECRET: string;

      NODE_ENV: "development" | "production";
      PWD: string;
    }
  }
}
export {};
