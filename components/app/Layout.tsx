import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Header from './Header'
import Footer from './Footer'
// import Loader from "./Loader";
// import useRequireAuth from "../../lib/useRequireAuth";

// import type { WithChildren } from "@/types";

// interface LayoutProps extends WithChildren {
// }

export default function Layout({ children }: any) {
  const title = "Platforms on Vercel";
  const description =
    "Create a fullstack application with multi-tenancy and custom domains support using Next.js, Prisma, and PostgreSQL";
  const logo = "/favicon.ico";
  const router = useRouter();
  const sitePage = router.pathname.startsWith("/app/site/[id]");
  const postPage = router.pathname.startsWith("/app/post/[id]");
  const rootPage = !sitePage && !postPage;
  const tab = rootPage
    ? router.asPath.split("/")[1]
    : router.asPath.split("/")[3];

  return (
    <>
      <div>
        <Head>
          <title>Data for Good</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {/* <title>{title}</title>
          <link rel="icon" href={logo} />
          <link rel="shortcut icon" type="image/x-icon" href={logo} />
          <link rel="apple-touch-icon" sizes="180x180" href={logo} />
          <meta name="theme-color" content="#7b46f6" />

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={description} />
          <meta itemProp="image" content={logo} />
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={logo} />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Vercel" />
          <meta name="twitter:creator" content="@StevenTey" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={logo} /> */}
        </Head>
        <Header />
        {sitePage && (
          <div className="absolute left-0 right-0 top-16 font-cal border-b bg-white border-gray-200">
            <div className="flex justify-between items-center space-x-16 max-w-screen-xl mx-auto px-10 sm:px-20">
              <Link href="/" className="md:inline-block ml-3 hidden">
                ← All Sites
              </Link>
              <div className="flex justify-between items-center space-x-10 md:space-x-16">
                <Link
                  href={`/site/${router.query.id}`}
                  className={`border-b-2 ${
                    !tab ? "border-black" : "border-transparent"
                  } py-3`}
                >
                  Posts
                </Link>
                <Link
                  href={`/site/${router.query.id}/drafts`}
                  className={`border-b-2 ${
                    tab == "drafts" ? "border-black" : "border-transparent"
                  } py-3`}
                >
                  Drafts
                </Link>
                <Link
                  href={`/site/${router.query.id}/settings`}
                  className={`border-b-2 ${
                    tab == "settings" ? "border-black" : "border-transparent"
                  } py-3`}
                >
                  Settings
                </Link>
              </div>
              <div />
            </div>
          </div>
        )}
        {postPage && (
          <div className="absolute left-0 right-0 top-16 font-cal border-b bg-white border-gray-200">
            <div className="flex justify-between items-center space-x-16 max-w-screen-xl mx-auto px-10 sm:px-20">
              {/* {siteId ? (
                <Link
                  href={`/site/${siteId}`}
                  className="md:inline-block ml-3 hidden"
                >
                  ← All Posts
                </Link>
              ) : ( */}
                <div>
                  ←<p className="md:inline-block ml-3 hidden">All Posts</p>
                </div>
              {/* )} */}

              <div className="flex justify-between items-center space-x-10 md:space-x-16">
                <Link
                  href={`/post/${router.query.id}`}
                  className={`border-b-2 ${
                    !tab ? "border-black" : "border-transparent"
                  } py-3`}
                >
                  Editor
                </Link>
                <Link
                  href={`/post/${router.query.id}/settings`}
                  className={`border-b-2 ${
                    tab == "settings" ? "border-black" : "border-transparent"
                  } py-3`}
                >
                  Settings
                </Link>
              </div>
              <div />
            </div>
          </div>
        )}
        {/* <div className="pt-28">{children}</div> */}
        <main className='container mx-auto flex-1'>{children}</main>
        <Footer />
      </div>
    </>
  );
}


// import '@/styles/globals.css'
// import styles from '@/styles/Home.module.css'
// import Link from 'next/link'
// import { Sofia_Sans } from '@next/font/google'

// const sofiaSans = Sofia_Sans({ subsets: ['latin'] })

// const header = (
//   <header>
//     <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
//       <Link href="/">
//         <h1 className="text-3xl font-bold underline text-white">Data for Good</h1>
//       </Link>
//       <p className="text-center text-slate-300">Wellcome</p>
//     </div>
//   </header>
// )

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html>
//       <head />
//       <body>
//         <div className="mx-auto max-w-2xl px-6">
//           {header}
//           {children}
//           {footer}
//         </div>

//         <main className={styles.main}>
//         <div className={styles.grid}>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <p className={sofiaSans.className}>
//               Find in-depth information about Next.js features and&nbsp;API.
//             </p>
//           </a>

//           <a
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <p className={sofiaSans.className}>
//               Learn about Next.js in an interactive course with&nbsp;quizzes!
//             </p>
//           </a>
//         </div>
//       </main>
//       </body>
//     </html>
//   )
// }