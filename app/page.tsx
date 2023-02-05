import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import getPostMetadata from '@/components/getPostMetadata'
import PostPreview from '@/components/PostPreview'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const postMetadata = getPostMetadata()

  const postPreviews = postMetadata.map((post) => (
    <PostPreview key="post.slug" {...post} />
  ))

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}
      </div>
      <main className={styles.main}>
        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
