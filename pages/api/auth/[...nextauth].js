import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
export default NextAuth({
    providers:[
        GoogleProvider({
            clientId:"802096222389-opnmlm2gc063uop7e83gof32nfir2kug.apps.googleusercontent.com",
            clientSecret:"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",
        })
    ],
    secret:"a94a3s+451atc"
})