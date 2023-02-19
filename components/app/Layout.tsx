import React from "react"
import Head from "next/head";
import { useTranslation } from "react-i18next"
import Header from './Header'
import Footer from './Footer'

import localFont from '@next/font/local'

const CoFoSansMono = localFont({
  src: './fonts/cofosansmonovf.ttf',
  //[
    // {
    //   path: './fonts/cofosansmonovf.ttf',
    //   weight: '400',
    //   style: 'normal'
    // }
    // {
    //   path: './fonts/CoFoSansMono-Regular.otf',
    //   weight: '400',
    //   style: 'normal'
    // },
    // {
    //   path: './fonts/CoFoSansMono-Bold.otf',
    //   weight: '700',
    //   style: 'normal'
    // }

    // {
    //   path: './fonts/CoFo_Sans-Regular.woff',
    //   weight: '400',
    //   style: 'normal'
    // },
    // {
    //   path: './fonts/CoFo_Sans-Bold.woff',
    //   weight: '700',
    //   style: 'normal'
    // },
    // {
    //   path: './fonts/CoFo_Robert-Regular_Italic.woff',
    //   weight: '400',
    //   style: 'italic'
    // }
  // ],
  variable: '--font-cofo-sans-mono',
})

// import '@/styles/globals.css'
// import styles from '@/styles/Home.module.css'
// import { Sofia_Sans } from '@next/font/google'

// const sofiaSans = Sofia_Sans({ subsets: ['latin', 'cyrillic'], variable: '--font-sofia-sans' })

export default function Layout({ children, settings }: any) {
  const { t } = useTranslation("common");

  const title = t('title')
  // const description = "Create a fullstack application with multi-tenancy and custom domains support using Next.js, Prisma, and PostgreSQL";
  const icon = "/dfg_logo_16x16_hor.png"

  return (
    <>
      <Head>
        {/* <title>{title}</title> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={icon} />
        
        {/* <link rel="icon" href={logo} /> */}
        {/* <link rel="shortcut icon" type="image/x-icon" href={logo} /> */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href={logo} /> */}
        {/* <meta name="theme-color" content="#7b46f6" /> */}

        {/* <meta itemProp="name" content={title} /> */}
        {/* <meta itemProp="description" content={description} /> */}
        {/* <meta itemProp="image" content={logo} /> */}
        {/* <meta name="description" content={description} /> */}
        {/* <meta property="og:title" content={title} /> */}
        {/* <meta property="og:description" content={description} /> */}
        {/* <meta property="og:image" content={logo} /> */}
        {/* <meta property="og:type" content="website" /> */}

        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:site" content="@dataforgoodbg" />
        {/* <meta name="twitter:creator" content="@StevenTey" /> */}
        {/* <meta name="twitter:title" content={title} /> */}
        {/* <meta name="twitter:description" content={description} /> */}
        {/* <meta name="twitter:image" content={logo} /> */}
      </Head>
      <div className={`${CoFoSansMono.className}`}>
        <Header />
        <main className="container mx-auto flex-1 pt-24">
          {children}
        </main>
        <Footer settings={settings}/>
      </div>
    </>
  );
}


