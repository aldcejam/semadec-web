import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const googleUser = {
          id: account.id,
          login: account.login,
          name: account.name,
          avatar: user.image,
        };

        const getTokenFromYourAPIServer = (tipo: string, user: any) => {
          return true;
        };

        account.accessToken = await getTokenFromYourAPIServer(
          "google",
          googleUser
        );
        return true;
      }

      return false;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
});
