import NextAuth from "next-auth"
import AppleProvider from "next-auth/providers/apple"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import GithubProvider from "next-auth/providers/github"

export const authoptions = NextAuth({
  secret: process.env.SECRET,
  providers: [
    // OAuth authentication providers
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // // Sign in with passwordless email link
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: "<no-reply@example.com>",
    // }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
      // connect to the database
      const client = await mongoose.connect(process.env.MONGODB_URI)
      }

      
    }
  }
})

export { authoptions as GET, authoptions as POST }