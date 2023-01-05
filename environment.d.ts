declare global {
    namespace NodeJS {
      interface ProcessEnv {
        /* SUAP */
        SUAP_CLIENT_ID: string;
        SUAP_REDIRECT_URI: string;
        SUAP_URL: string;
        SUAP_SCOPE: string;
        /* Google */
        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;

        NEXTAUTH_URL: string;
        NEXTAUTH_SECRET: string;

        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}