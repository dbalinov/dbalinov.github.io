import React from "react"
import Head from "next/head";
import Script from "next/script";
import CoFoSansMono from "@/components/fonts/CoFoSansMono"
import Header from './Header'
import Footer from './Footer'

// import styles from '@/styles/Home.module.css'

export default function Layout({ children, settings }: any) {
  const icon = "/dfg_logo_16x16_hor.png"

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={icon} />
        <link rel="shortcut icon" type="image/x-icon" href={icon} />
        <link rel="apple-touch-icon" sizes="180x180" href={icon} />
        {/* <meta name="theme-color" content="#7b46f6" /> */}
        <meta name="twitter:site" content="@dataforgoodbg" />
        {/* <script src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script> */}
      </Head>
      <div className={`${CoFoSansMono.className} bg-good-bg`}>
        <Header />
        <main className="container mx-auto flex-1">
          {children}
        </main>
        <Footer settings={settings}/>
      </div>
    </>
  );
}


