// import { GetStaticPaths, GetStaticProps } from "next"
import { FileService } from "@/services"
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

// : GetStaticPaths
export async function getStaticPaths() {
  const paths = [];

  //paths: getI18nPaths(),

  for (const locale of ['bg', 'en']) {
    const posts = await FileService.readDir(`posts/${locale}`);
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

  const fileName = await FileService.readFile(`posts/${locale}/${slug}.md`);
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

  const image = `${process.env.NEXT_PUBLIC_HOST_URL}${featured_image}`

  return (
    <>
      <Head>
        <title>{title}</title>

        <link rel="icon" href={image} />

        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={image} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:creator" content="@dataforgoodbg" /> */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <div className="flex flex-col justify-center items-center">
        <div className="text-center w-full md:w-7/12 m-auto">
          <p className="text-sm md:text-base font-light text-gray-800 w-10/12 m-auto mt-10 mb-5">
            { format(parseISO(frontmatter.date), 'dd MMMM yyyy', { locale: dateLocale }) }
          </p>
          <h1 className="font-bold text-3xl font-cal md:text-6xl mb-10 text-black">
            {title}
          </h1>
          <p className="text-md md:text-lg text-gray-800 w-10/12 m-auto">
            {description}
          </p>
        </div>
        <div className="my-8 flex align-middle">
          <div className="text-md md:text-lg self-center ml-3">
            {t('by')}
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
    </>
  );
}