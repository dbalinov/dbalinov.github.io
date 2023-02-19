import { GetStaticPaths, GetStaticProps } from "next"
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Markdown from '@/components/Markdown';
import { format, parseISO } from 'date-fns'
import { enGB, bg } from 'date-fns/locale'
import { useTranslation } from "react-i18next"
import { getI18nPaths, getI18nProps } from "@/components/i18n-server";
import Link from '@/components/Link'
import Author from './author'
import Head from 'next/head'
// import getPostMetadata from '@/components/getPostMetadata'

// const getPostContent = (slug: string) => {
//   const folder = "posts/"
//   const file = `${folder}${slug}.md`;
//   const content = fs.readFileSync(file, 'utf8');
//   const matterResult = matter(content);

//   return matterResult;
// }

// export const generateStaticParams = async () => {
//   const posts = getPostMetadata();
//   return posts.map(post => ({ slug: post.slug }))
// }

// : GetStaticPaths
export async function getStaticPaths() {
  const paths = [];

  //paths: getI18nPaths(),

  for (const locale of ['bg', 'en']) {
    const posts = fs.readdirSync(`posts/${locale}`);
    for (const fileName of posts) {
      paths.push({
        params: {
          locale,
          slug: fileName.replace('.md', '')
        }
      })
    }
  }

  return {
    fallback: false,
    paths
  };
}

//: GetStaticProps
export async function getStaticProps(context: any) {
  const { params: { locale, slug } } = context

  const fileName = fs.readFileSync(`posts/${locale}/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      ...getI18nProps(context),
      locale,
      frontmatter,
      content
    }
  };
}

export default function PostPage({ frontmatter, content, locale, settings }: any) {
  const dateLocale = locale == 'bg' ? bg : enGB
  const { t } = useTranslation("common");

  const { title, description, featured_image } = frontmatter
  const authors = Array.isArray(frontmatter.author)
    ? frontmatter.author
    : [frontmatter.author]

  return (
    <>
      <Head>
        <title>{title}</title>

        <link rel="icon" href={featured_image} />
        {/* <link rel="shortcut icon" type="image/x-icon" href={logo} /> */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href={logo} /> */}
        {/* <meta name="theme-color" content="#7b46f6" /> */}

        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={featured_image} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={featured_image} />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:creator" content="@StevenTey" /> */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={featured_image} />
      </Head>
      <div className="mt-16">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center w-full md:w-7/12 m-auto">
            <p className="text-sm md:text-base font-light text-gray-500 w-10/12 m-auto mt-10 mb-5">
              { format(parseISO(frontmatter.date), 'dd MMMM yyyy', { locale: dateLocale }) }
            </p>
            <h1 className="font-bold text-3xl font-cal md:text-6xl mb-10 text-gray-800">
              {title}
            </h1>
            <p className="text-md md:text-lg text-gray-600 w-10/12 m-auto">
              {description}
            </p>
          </div>
          <div className="my-8 flex">
            <div className="inline-block text-md md:text-lg align-middle ml-3">
              <span className="font-semibold">{t('by')}</span>
            </div>
            {authors.map((author: string) => (
              <Link href={`/author/${author}`} key={author}>
                <Author person={settings.people[author]} locale={locale} />
              </Link>))}
          </div>
        </div>
        <div className="relative h-104 md:h-158 w-full max-w-screen-lg lg:w-2/3 md:w-5/6 m-auto mb-10 md:mb-20 md:rounded-2xl overflow-hidden">
          <Image
            width={1200}
            height={630}
            alt={frontmatter.title}
            src={frontmatter.featured_image}
            className="w-full h-full object-cover duration-700 ease-in-out grayscale-0 blur-0 scale-100"
          />
        </div>
        <article className="w-11/12 sm:w-3/4 m-auto prose prose-md sm:prose-lg">
          <Markdown className="prose lg:prose-xl">{content}</Markdown>
        </article>
      </div>
    </>
  );
}