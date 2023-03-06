import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { getI18nPaths, getI18nProps } from "@/components/i18n-server"
import { FileService } from "@/services"
import matter from 'gray-matter'
import Link from '@/components/Link'

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: false,
    paths: getI18nPaths()
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { locale } = context.params

  const folder = `posts/${locale}`
  const files = await FileService.readDir(folder)

  const posts = files.map(async fileName => {
    const slug = fileName.replace('.md', '');
    const readFile = await FileService.readFile(`posts/${locale}/${fileName}`);
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter
    };
  });

  // const markdownPosts = files.filter(file => file.endsWith(".md"))

  // const posts = markdownPosts.map((fileName) => {
  //   const fileContents = await FileService.readFile(`posts/${fileName}`)
  //   const matterResult = matter(fileContents);

  //   return {
  //     title: matterResult.data.title,
  //     date: matterResult.data.date,
  //     subtitle: matterResult.data.subtitle,
  //     slug: fileName.replace(".md", "")
  //   }
  // });

  return {
    props: {
      ...getI18nProps(context),
      posts: await Promise.all(posts),
    }
  };
};

export default function Blog({ posts }: any) {
  const title = 'Блог'

  return (
    <>
      <Head>
        <title>{title}</title>

        {/* <link rel="icon" href={image} /> */}

        <meta itemProp="name" content={title} />
        {/* <meta itemProp="description" content={description} /> */}
        {/* <meta itemProp="image" content={image} /> */}
        {/* <meta name="description" content={description} /> */}
        <meta property="og:title" content={title} />
        {/* <meta property="og:description" content={description} /> */}
        {/* <meta property="og:image" content={image} /> */}
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:creator" content="@dataforgoodbg" /> */}
        <meta name="twitter:title" content={title} />
        {/* <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} /> */}
      </Head>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
        {posts.map(({ slug, frontmatter }: any) => (
          <div
            key={slug}
            className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
          >
            <Link href={`/posts/${slug}`}>
              {/* <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              /> */}
              <h1 className='p-4'>{frontmatter.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
