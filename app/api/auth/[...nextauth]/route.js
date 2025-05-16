import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";
import mongoose from "mongoose";
import User from "@/models/user";
import Payment from "@/models/payments";

export const AuthOptions = NextAuth({
providers: [
  GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  })
],
callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    if(account.provider == "github"){
      const client = await mongoose.connect("mongodb+srv://abik4001:abik1234@cluster0.q8bkizs.mongodb.net/")
      const currentUser = User.findOne({ email: user.email })
      if(currentUser){
        const newUser = await User.create({
          email: user.email,
          username: user.email.split('@')[0]
        })
        await newUser.save()
        user.name = newUser.username
      }
      else{
        user.name = currentUser.username
      }
      return true
    }
  }
},
});

export { AuthOptions as GET, AuthOptions as POST };
