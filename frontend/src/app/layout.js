import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { ChakraProvider } from "@chakra-ui/react";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "NeuroCure",
  description: 'NeuroCure is an advanced web application for the detection and analysis of brain tumors, providing accurate insights and visualizations to assist in diagnosis and treatment decisions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
        <link rel="icon" href="/icon3.png" type="image/png" />
        {/* You can add more meta tags here */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Analytics/>
      <ChakraProvider>
     
   
      <Navbar/>
      
        {children}
        <Footer/>
        </ChakraProvider>
      </body>
    </html>
  );
}
