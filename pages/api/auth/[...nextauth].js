import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId:process.env.GITHUB_CLIENT_ID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET
        }),
        FacebookProvider({
            clientId:process.env.FACEBOOK_CLIENT_ID,
            clientSecret:process.env.FACEBOOK_CLIENT_SECRET
        }),

    ],
    secret:"a94a3s+451atc"
})