import Layout from '../components/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;


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

// const footer = (
//   <footer className="border-t border-slate-500 mt-6 py-6 text-center text-slate-400">
//     <div>
//       <br />
//       <h3>Developed by Jack</h3>
//     </div>
//   </footer>
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
