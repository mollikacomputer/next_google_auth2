import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHubProvider({
            clientId:"dbc5204ee6d6079459b5",
            clientSecret:"3d4d99fcf9d0bf24fb687d435a7f5de68e56a4e6",
          })
    ],
    secret:"a94a3s+451atc"
})