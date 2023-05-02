
import { Inter } from 'next/font/google';
import {Chatbot} from 'react-chatbot-kit';
import Config from './Config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h2 className="text-2xl">Home Page </h2>
      <Chatbot config={Config} actionProvider={ActionProvider} messageParser={MessageParser} />
    </main>
  )
}
